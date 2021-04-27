<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use App\Models\Setting;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    private $setting;
    public function __construct(Setting $setting)
    {
        $this->setting = $setting;
    }
    public function index(){
        $data = $this->setting->all();
        return response()->json($data, 200);
    }
    public function deletelist(Request $request){
        $id = $request->_id;
        // dd($id);
        $this->setting->where('_id',$id)->delete();
    }
    public function store(Request $request){
        $data = [
            '_id' => $request->_id,
            'st_key' => $request->input,
            'st_value' => []
        ];
        $this->setting->insert($data);
    }
    public function additem(Request $request){
        $id = $request->_id;
        $add_value = $request->input;
        // $add_value = "them";
        $data = $this->setting->where('_id',$id)->get();
        // dd($data);
        $st_value = [];
        foreach ($data as $key){
            foreach($key['st_value'] as $item){
                $st_value[] = $item;
            }
        }
        $st_value[] = $add_value;
        // dd($st_value);
        $this->setting->where('_id',$id)->update(['st_value' => $st_value]);
    }
    public function deleteitem(Request $request){
        $id = $request->_id;
        $i = $request->i;
        $data = $this->setting->where('_id',$id)->get();
        $st_value = [];
        foreach ($data as $key){
            if(count($key['st_value']) == 1){
                $st_value = [];
            }
            else {
                $st_value = $key['st_value'];
            }
        }
        array_splice($st_value , $i,$i);
        $this->setting->where('_id',$id)->update(['st_value' => $st_value]);
    }
    public function updateItem(Request $request){
        $id = $request->_id;
        $i = $request->i;
        $update_Value = $request->input;
        $data = $this->setting->where('_id',$id)->get();
        $st_value = [];
        foreach ($data as $key){
            if(count($key['st_value']) == 1){
                $st_value = [];
            }
            else {
                $st_value = $key['st_value'];
            }
        }
        array_splice($st_value , $i,$i);
        $st_value[$i] = $update_Value;
        $this->setting->where('_id',$id)->update(['st_value' => $st_value]);
    }
}
