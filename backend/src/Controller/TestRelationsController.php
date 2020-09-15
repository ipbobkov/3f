<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TestRelationsController extends AbstractController
{
    /**
     * @Route("/test/relations", name="test_relations")
     */
    public function index()
    {
        return $this->render('test_relations/index.html.twig', [
            'controller_name' => 'TestRelationsController',
        ]);
    }
}
