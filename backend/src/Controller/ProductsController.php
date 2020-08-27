<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProductsController extends AbstractController
{
    /**
     * @Route("/food-products-con", name="products")
     */
    public function index()
    {
        $arr=array(
            array(
                'id'=>'1',
                'name'=>'Apples',
                'icon'=>'https://www.dw.com/image/47425871_401.jpg',
                'comment'=>'And my favorite food is broccoli. Garlic bread is my favorite food. My favorite food is, I am afraid to say, steak! (Cassandra) These used to be my favorite food.',
                'proteine'=>'2',
                'fat'=>'1',
                'carbohydrate'=>'35',
                'nutrients'=>array()
            ),
            array(
                'id'=>'2',
                'name'=>'Potatoes',
                'icon'=>'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/are-potatoes-healthy-1570222022.jpg',
                'comment'=>'There are six activities, highlighting potatoes from the farm to fork. They can be used to support the Grow Your Own Potato competition.',
                'proteine'=>'2',
                'fat'=>'12',
                'carbohydrate'=>'65',
                'nutrients'=>array()
            ),
            array(
                'id'=>'3',
                'name'=>'Onion',
                'icon'=>'https://www.vmcdn.ca/f/files/via/images/colourful-onions.jpg;w=960',
                'comment'=>'
                Wow what is life ? Tell me it is like Honshitsu motomeru hibi Peel it over and over again Life is like an onion',
                'proteine'=>'3',
                'fat'=>'5',
                'carbohydrate'=>'34',
                'nutrients'=>array()
            ),
            array(
                'id'=>'4',
                'name'=>'Becon',
                'icon'=>'https://avatars.mds.yandex.net/get-altay/2402012/2a000001708b4b775c14933bbc638c8af652/XXL',
                'comment'=>'Becon is the former name of the American television station WBEC-TV.',
                'proteine'=>'34',
                'fat'=>'23',
                'carbohydrate'=>'5',
                'nutrients'=>array()
            ),
            array(
                'id'=>'5',
                'name'=>'Carrots',
                'icon'=>'https://www.burpee.com/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dwa74e0ebb/Images/Product%20Images/prod000632/prod000632.jpg',
                'comment'=>'The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist.',
                'proteine'=>'2',
                'fat'=>'4',
                'carbohydrate'=>'78',
                'nutrients'=>array()
            ),
            array(
                'id'=>'6',
                'name'=>'Fish',
                'icon'=>'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2020-6/salmon-fish-raw-whole-ice-1296x728-header.jpg?w=1155',
                'comment'=>'Fish are gill-bearing aquatic craniate animals that lack limbs with digits. They form a sister group to the tunicates, together forming the olfactores. Included in this definition are the living hagfish, lampreys, and cartilaginous and bony fish as well as various extinct related groups.',
                'proteine'=>'23',
                'fat'=>'67',
                'carbohydrate'=>'10',
                'nutrients'=>array()
            ),
            array(
                'id'=>'7',
                'name'=>'Bread',
                'icon'=>'https://static.toiimg.com/thumb/75518944.cms?width=680&height=512&imgsize=3045768',
                'comment'=>'Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been a prominent food in large parts of the world; it is one of the oldest man-made foods, having been of significant importance since the dawn of agriculture; and plays an essential role in religious rituals and secular culture.',
                'proteine'=>'12',
                'fat'=>'26',
                'carbohydrate'=>'62',
                'nutrients'=>array()
            ),
            array(
                'id'=>'8',
                'name'=>'Tea',
                'icon'=>'https://static.toiimg.com/thumb/69385334.cms?width=680&height=512&imgsize=191579',
                'comment'=>'Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured or fresh leaves of the Camellia sinensis, an evergreen shrub native to East Asia.',
                'proteine'=>'0',
                'fat'=>'2',
                'carbohydrate'=>'34',
                'nutrients'=>array()
            )
        );
        return $this->json($arr);
    }
}
