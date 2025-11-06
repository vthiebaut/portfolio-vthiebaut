<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/comments')]
class CommentController extends AbstractController
{
    #[Route('', name: 'create_comment', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!\is_array($data)) {
            return new JsonResponse(['error' => 'Payload JSON invalide.'], Response::HTTP_BAD_REQUEST);
        }

        // Normalisations
        $name    = trim((string)($data['name'] ?? ''));
        $surname = trim((string)($data['surname'] ?? ''));
        $content = trim((string)($data['content'] ?? ''));
        $rating  = (int)($data['rating'] ?? 5);

        // Validations basiques
        if ($name === '' || $surname === '' || $content === '') {
            return new JsonResponse(['error' => 'Champs requis manquants (name, surname, content).'], Response::HTTP_BAD_REQUEST);
        }
        if ($rating < 1 || $rating > 5) {
            return new JsonResponse(['error' => 'La note (rating) doit être comprise entre 1 et 5.'], Response::HTTP_BAD_REQUEST);
        }
        if (\strlen($name) > 100 || \strlen($surname) > 100) {
            return new JsonResponse(['error' => 'Nom/Prénom trop longs (100 max).'], Response::HTTP_BAD_REQUEST);
        }
        // Optionnel : supprimer tout HTML
        $content = strip_tags($content);

        $comment = new Comment();
        $comment->setName($name);
        $comment->setSurname($surname);
        $comment->setRating($rating);
        $comment->setContent($content);
        $comment->setIsApproved(false); // explicite, même si défaut en Entity

        $em->persist($comment);
        $em->flush();

        return new JsonResponse([
            'message' => 'Commentaire soumis avec succès.',
            'id'      => $comment->getId(),
        ], Response::HTTP_CREATED);
    }

    #[Route('/approved', name: 'get_approved_comments', methods: ['GET'])]
    public function getApproved(CommentRepository $repo): JsonResponse
    {
        $comments = $repo->findApproved();

        $data = array_map(function (Comment $c) {
            return [
                'id'         => $c->getId(),
                'name'       => $c->getName(),
                'surname'    => $c->getSurname(),
                'rating'     => $c->getRating(),
                'content'    => $c->getContent(),
                'createdAt'  => $c->getCreatedAt()->format(\DATE_ATOM), // ISO 8601
                'isApproved' => true,
            ];
        }, $comments);

        return new JsonResponse($data, Response::HTTP_OK);
    }

    #[Route('/pending', name: 'get_pending_comments', methods: ['GET'])]
    #[IsGranted('ROLE_ADMIN')]
    public function getPending(CommentRepository $repo): JsonResponse
    {
        $comments = $repo->findBy(['isApproved' => false], ['createdAt' => 'DESC']);

        $data = array_map(function (Comment $c) {
            return [
                'id'        => $c->getId(),
                'name'      => $c->getName(),
                'surname'   => $c->getSurname(),
                'rating'    => $c->getRating(),
                'content'   => $c->getContent(),
                'createdAt' => $c->getCreatedAt()->format(\DATE_ATOM),
            ];
        }, $comments);

        return new JsonResponse($data, Response::HTTP_OK);
    }

    #[Route('/{id}', name: 'update_comment', methods: ['PUT'])]
    #[IsGranted('ROLE_ADMIN')]
    public function update(Request $request, Comment $comment, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!\is_array($data)) {
            return new JsonResponse(['error' => 'Payload JSON invalide.'], Response::HTTP_BAD_REQUEST);
        }

        // On limite volontairement aux champs d'admin
        if (\array_key_exists('isApproved', $data)) {
            $comment->setIsApproved((bool)$data['isApproved']);
        }

        $em->flush();

        return new JsonResponse(['message' => 'Commentaire mis à jour.'], Response::HTTP_OK);
    }
}
