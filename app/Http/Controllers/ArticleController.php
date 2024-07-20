<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\article;
use Inertia\Inertia;

class ArticleController extends Controller
{

    public function index()
    {
        $articles = Article::latest()->paginate(5);
        return Inertia::render('Admin/Artikel', [
            'articles' => $articles,
        ]);
    }

    public function edit(Article $article)
    {
        return Inertia::render('Admin/Form', [
            'articles' => $article,
        ]);
    }

    public function getAll()
    {
        $articles = Article::all();
        return Inertia::render('Home', [
            'articles' => $articles,
        ]);
    }

    public function getById(Article $article)
    {
        return Inertia::render('Detail', [
            'articles' => $article,
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        Article::create($validatedData);

        return redirect()->route('article.index')->with('success', 'Article created successfully!');
    }
    

    public function update(Article $article, Request $request)
    {
        $article->update($request->validated());

        return redirect()->route('article.index')->with('success', 'Article updated successfully!');
    }

    public function destroy(Article $article)
    {
        $article->delete();

        return redirect()->route('article.index')->with('success', 'Article deleted successfully!');
    }
}
