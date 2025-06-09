<?php

namespace App\Service;

use App\Repository\UnavailabilityRepository;

class UnavailabilityExpander
{
    public function __construct(private readonly UnavailabilityRepository $repo) {}

    public function getExpanded(\DateTimeInterface $start, \DateTimeInterface $end): array
    {
        $results = [];
        $unavailabilities = $this->repo->findInRange($start, $end);

        foreach ($unavailabilities as $item) {
            $isRecurring = $item->getRecurrence() !== null;

            if (!$isRecurring) {
                $results[] = [
                    'start' => $item->getStart()->format(\DateTime::ATOM),
                    'end' => $item->getEndAt()->format(\DateTime::ATOM),
                    'id' => $item->getId(),
                    'recurrence' => $item->getRecurrence(),
                    'recurrenceEnd' => $item->getRecurrenceEnd()?->format(\DateTime::ATOM),
                ];
                continue;
            }

            $interval = match ($item->getRecurrence()) {
                'daily' => new \DateInterval('P1D'),
                'weekly' => new \DateInterval('P1W'),
                'monthly' => new \DateInterval('P1M'),
                default => null,
            };

            if (!$interval) continue;

            $originalStart = clone $item->getStart();
            $originalEnd = clone $item->getEndAt();
            $duration = $originalStart->diff($originalEnd);

            $until = $item->getRecurrenceEnd() ?? $end;
            $currentStart = clone $originalStart;

            while ($currentStart <= $until) {
                $currentEnd = (clone $currentStart)->add($duration);

                if ($currentEnd >= $start && $currentStart <= $end) {
                    $results[] = [
                        'start' => $currentStart->format(\DateTime::ATOM),
                        'end' => $currentEnd->format(\DateTime::ATOM),
                        'id' => $item->getId(),
                        'recurrence' => $item->getRecurrence(),
                        'recurrenceEnd' => $item->getRecurrenceEnd()?->format(\DateTime::ATOM),
                    ];
                }

                $currentStart = $currentStart->add($interval);
            }
        }

        return $results;
    }

}
