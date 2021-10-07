<template>
    <div>
        <div>
            <h1>Infos utilisateur</h1>
        </div>
        <v-row>  
            <v-col cols="6">
            <v-card elevation="2">
            <v-card-text >Nom</v-card-text>
            <v-divider></v-divider>
            <v-card-text >Adresse email</v-card-text>
            <v-divider></v-divider>
            <v-card-text >Mot de passe</v-card-text>
            </v-card>
            </v-col>
            <v-col cols="6">
                <v-btn depressed color="error">
                    Se déconnecter
                </v-btn>
                <v-row>
                <v-btn class="ma-2" outlined color="error">
                    Supprimer son compte
                </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </div>
    
</template>