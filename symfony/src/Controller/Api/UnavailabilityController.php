<?php

namespace App\Controller\Api;

use App\Entity\Unavailability;
use App\Repository\UnavailabilityRepository;
use App\Service\UnavailabilityExpander;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/unavailabilities')]
class UnavailabilityController extends AbstractController
{

    #[Route('/all', name: 'api_unavailabilities_all', methods: ['GET'])]
    public function all(UnavailabilityRepository $repo, SerializerInterface $serializer): JsonResponse
    {
        $list = $repo->findBy([], ['start' => 'DESC']);

        return new JsonResponse(
            $serializer->serialize($list, 'json', ['groups' => ['unavailability:read']]),
            200,
            [],
            true
        );
    }
    #[Route('', methods: ['GET'])]
    public function index(Request $request, UnavailabilityExpander $expander): JsonResponse
    {
        $startParam = $request->query->get('start');
        $endParam = $request->query->get('end');

        if (!$startParam || !$endParam) {
            return $this->json(['error' => 'Missing start or end parameter'], 400);
        }

        try {
            $start = new \DateTimeImmutable($startParam);
            $end = new \DateTimeImmutable($endParam);
        } catch (\Exception $e) {
            return $this->json(['error' => 'Invalid date format'], 400);
        }

        // 👉 utilise le service pour "expand" les récurrences
        $results = $expander->getExpanded($start, $end);

        return $this->json($results);
    }

    #[Route('', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!isset($data['start']) || !isset($data['end'])) {
            return $this->json(['error' => 'Start and end are required'], 400);
        }

        $unavailability = new Unavailability();
        $unavailability
            ->setStart(new \DateTimeImmutable($data['start']))
            ->setEndAt(new \DateTimeImmutable($data['end']))
            ->setRecurrence($data['recurrence'] ?? null);

        if (!empty($data['recurrenceEnd'])) {
            $unavailability->setRecurrenceEnd(new \DateTimeImmutable($data['recurrenceEnd']));
        }

        $em->persist($unavailability);
        $em->flush();

        return $this->json($unavailability, 201, [], ['groups' => 'unavailability:read']);
    }

    #[Route('/{id}', methods: ['DELETE'])]
    public function delete(Unavailability $unavailability, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($unavailability);
        $em->flush();

        return $this->json(null, 204);
    }

    #[Route('/{id}', methods: ['PUT'])]
    public function update(
        int $id,
        Request $request,
        UnavailabilityRepository $repo,
        EntityManagerInterface $em
    ): JsonResponse {
        $unavailability = $repo->find($id);

        if (!$unavailability) {
            return $this->json(['error' => 'Unavailability not found'], 404);
        }

        $data = json_decode($request->getContent(), true);

        if (!isset($data['start']) || !isset($data['end'])) {
            return $this->json(['error' => 'Start and end are required'], 400);
        }

        try {
            $unavailability
                ->setStart(new \DateTimeImmutable($data['start']))
                ->setEndAt(new \DateTimeImmutable($data['end']))
                ->setRecurrence($data['recurrence'] ?? null);

            if (!empty($data['recurrenceEnd'])) {
                $unavailability->setRecurrenceEnd(new \DateTimeImmutable($data['recurrenceEnd']));
            } else {
                $unavailability->setRecurrenceEnd(null);
            }

            $em->flush();

            return $this->json($unavailability, 200, [], ['groups' => 'unavailability:read']);
        } catch (\Exception $e) {
            return $this->json(['error' => 'Invalid date format'], 400);
        }
    }

    #[Route('/{id}', name: 'api_unavailability_get', methods: ['GET'])]
    public function getOne(Unavailability $unavailability, SerializerInterface $serializer): JsonResponse
    {
        return new JsonResponse(
            $serializer->serialize($unavailability, 'json', ['groups' => ['unavailability:read']]),
            200,
            [],
            true
        );
    }


}
