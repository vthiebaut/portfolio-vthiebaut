<?php

namespace App\Entity;

use App\Repository\UnavailabilityRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: UnavailabilityRepository::class)]
class Unavailability
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['unavailability:read'])]
    private ?int $id = null;

    #[ORM\Column]
    #[Groups(['unavailability:read'])]
    private \DateTimeImmutable $start;

    #[ORM\Column]
    #[Groups(['unavailability:read'])]
    private \DateTimeImmutable $endAt;

    #[ORM\Column(length: 20, nullable: true)]
    #[Groups(['unavailability:read'])]
    private ?string $recurrence = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['unavailability:read'])]
    private ?\DateTimeImmutable $recurrenceEnd = null;

    public function getId(): ?int { return $this->id; }

    public function getStart(): \DateTimeImmutable { return $this->start; }
    public function setStart(\DateTimeImmutable $start): static {
        $this->start = $start;
        return $this;
    }

    public function getEndAt(): \DateTimeImmutable { return $this->endAt; }
    public function setEndAt(\DateTimeImmutable $end): static {
        $this->endAt = $end;
        return $this;
    }

    public function getRecurrence(): ?string { return $this->recurrence; }
    public function setRecurrence(?string $recurrence): static {
        $this->recurrence = $recurrence;
        return $this;
    }

    public function getRecurrenceEnd(): ?\DateTimeImmutable { return $this->recurrenceEnd; }
    public function setRecurrenceEnd(?\DateTimeImmutable $recurrenceEnd): static {
        $this->recurrenceEnd = $recurrenceEnd;
        return $this;
    }
}
