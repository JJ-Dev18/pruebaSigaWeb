<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCitas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('citas', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->integer('status');
            $table->string('motivo',200);
            $table->string('observacion',300);
            $table->date('fecha');
            $table->time('hora');
            // $table->unsignedBigInteger('user_id');
            $table->timestamps();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('psicologo_id')->constrained('psicologos');
            // $table->foreign('psicologo_id')->references('id')->on('psicologos')
            //     ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('citas');
    }
}
