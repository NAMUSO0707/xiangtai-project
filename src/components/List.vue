<template>
    <div class="box">
      <div class="header">
        <input type="checkbox" />
        <span>列表一</span>
      </div>
      <ul class="list">
        <li class="item"><input type="checkbox" v-model="item.checked" />选项一</li>
      </ul>
    </div>
</template>