<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUgTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ug', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned()->default(0);
            $table->bigInteger('urn')->unsigned()->unique()->default(0);
            $table->bigInteger('crn')->unsigned()->default(0);
            $table->integer('credits_sem1')->nullable();
            $table->decimal('sgpa_sem1',5,2)->nullable();
            $table->integer('credits_sem2')->nullable();
            $table->decimal('sgpa_sem2',5,2)->nullable();
            $table->integer('credits_sem3')->nullable();
            $table->decimal('sgpa_sem3',5,2)->nullable();
            $table->integer('credits_sem4')->nullable();
            $table->decimal('sgpa_sem4',5,2)->nullable();
            $table->integer('credits_sem5')->nullable();
            $table->decimal('sgpa_sem5',5,2)->nullable();
            $table->integer('credits_sem6')->nullable();
            $table->decimal('sgpa_sem6',5,2)->nullable();
            $table->integer('credits_sem7')->nullable();
            $table->decimal('sgpa_sem7',5,2)->nullable();
            $table->integer('credits_sem8')->nullable();
            $table->decimal('sgpa_sem8',5,2)->nullable();
            $table->decimal('aggregate_sgpa',5,2)->nullable();
            $table->decimal('aggregate_percentage',5,2)->nullable();
            $table->decimal('aggregate_credits',5,2)->nullable();
            $table->string('file')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ug');
    }
}
