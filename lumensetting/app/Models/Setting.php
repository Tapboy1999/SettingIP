<?php

namespace App\Models;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;


class Setting extends Eloquent {
    public $timestamps = true;
    protected $connection = 'mongodb';
    protected $collection = 'setting';

}




?>
