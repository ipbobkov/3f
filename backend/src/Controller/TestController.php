<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Test;
use App\Entity\TestRelations;

class TestController extends AbstractController
{
    /**
     * @Route("/api/test", name="test")
     */
    public function index(SerializerInterface $serializer, EntityManagerInterface $em)
    {
        // $arr = ['Первый'=>'1','Второй'=>'2','Третий'=>'3'];

        $tests = $em->getRepository(TestRelations::class)->findAll();

        dd($tests);

        // $json = $serializer->serialize($arr, 'json');

        // // dd($json);

        // $response = new JsonResponse($json, 200, [], true);
        // $response->setEncodingOptions(JSON_UNESCAPED_UNICODE);

        // return $response;

        // return $this->render('test/index.html.twig', [
        //     'controller_name' => 'TestController',
        // ]);

        return $this->json($tests, 200, [], ['json_encode_options'=>JSON_UNESCAPED_UNICODE]);
    }
}
