<script lang="ts" setup>

</script>

<template>
    <div class="side-bar" style="width: 100px;margin-top: 70px;">
       <router-link to="/chat" >
        <img src="back.svg" class="small-icon" alt="back">
       </router-link>
       <div class="side-bar-section">
          <router-link class="link" to="/edit-user-profile">Profile</router-link>
       </div>
       <div class="side-bar-section">
        <router-link class="link" to="/edit-user-other">Other</router-link>
       </div>
       <div class="side-bar-section"></div>
    </div>
</template>

<style>
@import '../../../assets/sideBarStyles.css';
</style>