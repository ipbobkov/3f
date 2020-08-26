<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProductsController extends AbstractController
{
    /**
     * @Route("/food-products222", name="products")
     */
    public function index()
    {
        $arr=array(
            array(
                'id'=>'1',
                'name'=>'str',
                'icon'=>'str',
                'comment'=>'str',
                'proteine'=>'str',
                'fat'=>'str',
                'carbohydrate'=>'str',
                'nutrients'=>array()
            ),
            array(
                'id'=>'2',
                'name'=>'str',
                'icon'=>'str',
                'comment'=>'str',
                'proteine'=>'str',
                'fat'=>'str',
                'carbohydrate'=>'str',
                'nutrients'=>array()
            )
        );
        return $this->json($arr);
    }
}
