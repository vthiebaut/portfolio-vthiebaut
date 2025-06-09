<?php

namespace App\Repository;

use App\Entity\Unavailability;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class UnavailabilityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Unavailability::class);
    }

    /**
     * Récupère les indisponibilités (ponctuelles ou récurrentes) dans une période donnée
     */
    public function findInRange(\DateTimeInterface $start, \DateTimeInterface $end): array
    {
        return $this->createQueryBuilder('u')
            ->where('
            (u.start <= :end AND u.endAt >= :start)
            OR (
                u.recurrence IS NOT NULL
                AND (
                    u.recurrenceEnd IS NULL OR u.recurrenceEnd >= :start
                )
            )
        ')
            ->setParameter('start', $start)
            ->setParameter('end', $end)
            ->getQuery()
            ->getResult();
    }


}
