<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TestRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=TestRepository::class)
 */
class Test
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $comment;

    /**
     * @ORM\OneToMany(targetEntity=TestRelations::class, mappedBy="test")
     */
    private $testRelations;

    public function __construct()
    {
        $this->testRelations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    /**
     * @return Collection|TestRelations[]
     */
    public function getTestRelations(): Collection
    {
        return $this->testRelations;
    }

    public function addTestRelation(TestRelations $testRelation): self
    {
        if (!$this->testRelations->contains($testRelation)) {
            $this->testRelations[] = $testRelation;
            $testRelation->setTest($this);
        }

        return $this;
    }

    public function removeTestRelation(TestRelations $testRelation): self
    {
        if ($this->testRelations->contains($testRelation)) {
            $this->testRelations->removeElement($testRelation);
            // set the owning side to null (unless already changed)
            if ($testRelation->getTest() === $this) {
                $testRelation->setTest(null);
            }
        }

        return $this;
    }
}
