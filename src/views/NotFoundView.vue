<template>
    <div id="erreur">
        <h1>Oh non ! Vous êtes perdus ?</h1>
        <RouterLink :to="{ name: 'home'}">Pour retourner sur l'accueil c'est par ici.</RouterLink>
    </div>
    <img src="https://media.istockphoto.com/id/1023347350/fr/photo/point-dinterrogation-3d-point-rouge-dinterrogation-demandant-signe-de-ponctuation-isol%C3%A9e.jpg?s=612x612&w=0&k=20&c=eVZrCH5I73a5W_2TZ0tlrWdK68UAoXZPaytoZyGoj90="/>
</template>

<style scoped>
h1{
    color:red;
}
img{
    width: 500px;
    animation:rotate 3s infinite linear;
}

#erreur{
    flex:1;
    flex-direction: column;
    margin-bottom: 100px;
}
@keyframes rotate{
    from{
        transform:rotate(-20deg)
    }
    50%{
        transform:rotate(20deg)
    }
    to{
        transform:rotate(-20deg)
    }
}

</style>