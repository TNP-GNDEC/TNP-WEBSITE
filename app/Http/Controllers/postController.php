<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Carbon\Carbon;

class postController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getposts(Request $request)
    {
        $page = $request->page;
        $search = $request->searchText;
        if (!empty($search))
        {
            $posts = Post::orderBy('updated_at', 'DESC')->where('title', 'Like', '%' . $search . '%')->skip(0)
                ->take($page)->get();
        }
        else
        {
            $posts = Post::orderBy('updated_at', 'DESC')->skip(0)
                ->take($page)->get();
        }
        return response()
            ->json(['status' => 200, 'page' => $page, 'posts' => $posts]);
    }
    
    public function lastThreePosts(Request $request)
    {
        $posts = Post::orderBy('updated_at', 'DESC')->take(3)->get();
        return response()
            ->json(['status' => 200, 'posts' => $posts]);
    }

    public function counter(Request $request)
    {
        $count = Post::count();
        $monthly = Post::whereMonth('updated_at', date('m'))->count();
        return response()
            ->json(['status' => 200, 'count' => $count, 'monthly' => $monthly]);
    }
    public function postChartData(Request $request)
    {
        $mon6 = Post::whereMonth('updated_at', date('m'))->count();
        $mon5 = Post::whereMonth('updated_at', Carbon::now()->submonth()->month)->count();
        $mon4 = Post::whereMonth('updated_at', Carbon::now()->submonth(2)->month)->count();
        $mon3 = Post::whereMonth('updated_at', Carbon::now()->submonth(3)->month)->count();
        $mon2 = Post::whereMonth('updated_at', Carbon::now()->submonth(4)->month)->count();
        $mon1 = Post::whereMonth('updated_at', Carbon::now()->submonth(5)->month)->count();
        return response()
            ->json(['status' => 200, 
                    'mon6' => $mon6, 
                    'mon5' => $mon5,
                    'mon4' => $mon4,
                    'mon3' => $mon3,
                    'mon2' => $mon2,
                    'mon1' => $mon1,]);
    }

    public function index()
    {
        $posts = Post::orderBy('updated_at', 'DESC')->limit(6)
            ->get();
        return response()
            ->json(['status' => 200, 'posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newPost = Post::create(['title' => $request->title, 'type' => $request->type, 'description' => $request->description, 'tags' => json_encode($request->tags) , ]);
        if ($newPost)
        {
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $posts = Post::find($id);
        return response()->json(['status' => 200, 'posts' => $posts]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $posts = Post::find($id);
        $posts->title = $request->title;
        $posts->type = $request->type;
        $posts->description = $request->description;
        $posts->tags = json_encode($request->tags);
        if ($posts->save())
        {
            return response()
                ->json(["status" => 200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $posts = Post::find($id);
        if ($posts->delete())
        {
            return response()
                ->json(["status" => 200]);
        }
    }
}