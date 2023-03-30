<template>
    <div class="entry-title d-flex justify-content-between p-2">

        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2021, jueves</span>
        </div>
        <div>
            <button type="" class="btn btn-danger">Borrar
            <i class="fa fa-trash-alt"></i></button>
            <button type="" class="btn btn-primary">upload
            <i class="fa fa-upload"></i></button>
        </div>
    </div>
    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Que sucecio hoy?">
        </textarea>
    </div>
    <Fab icon="fa-save" />
    <img src="https://p4.wallpaperbetter.com/wallpaper/849/1015/727/batman-batman-logo-video-games-batman-arkham-origins-wallpaper-preview.jpg" 
    class="img-thumnail"
    alt="Entry-picture">
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        Fab:defineAsyncComponent(()=>import('../components/Fab.vue'))
    }
}
</script>
<style lang="scss" scoped>
    textarea{
        font-size:20px;
        border:none;
        height:100%;
        &:focus{
            outline:none;
        }
    }
    img{
        bottom:110px;
        box-shadow:0px 5px 10px rgba($color:#000000,$alpha:0.2);
        position:fixed;
        right:20px;
        width:200px;

    }
</style>