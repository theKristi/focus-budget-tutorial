<template>
<section class="1-budget-body">
    <div class="md-budget" v-if="budget != null" v-for="budget in budgets" :key="budget.client_id">
        <div class="md-budget-info white--text">{{ budget.client }}</div>
        <div class="md-budget-info white--text">{{ budget.title }}</div>
        <div class="md-budget-info white--text">{{ budget.state }}</div>
        <div class="1-budget-actions">
          <v-btn small flat color="light-blue lighten-1">
            <v-icon small>visibiliy</v-icon>
          </v-btn>
          <v-btn small flat color="yellow lighten-1">
            <v-icon small>mode_edit</v-icon>
          </v-btn>
          <v-btn small flat color="red lighten-1">
            <v-icon small>delete_forever</v-icon>
          </v-btn>
       </div>
    </div>
</section>
</template>
<script>
export default {
  props: ['budgets']
}
</script>
<style lang="scss">
  @import "./../../assets/styles";
  .l-list-body {
    display: flex;
    flex-direction: column;
    .md-list-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 15px 0;
      @media (min-width: 960px) {
        flex-direction: row;
        margin: 0;
      }
      .md-budget-info {
        flex-basis: 25%;
        width: 100%;
        background-color: rgba(0, 175, 255, 0.45);
        border: 1px solid $border-color-input;
        padding: 0 15px;
        display: flex;
        height: 35px;
        align-items: center;
        justify-content: center;
        &:first-of-type, &:nth-of-type(2) {
          text-transform: capitalize;
        }
        &:nth-of-type(3) {
          text-transform: uppercase;
        }
        @media (min-width: 601px) {
          justify-content: flex-start;
        }
      }
      .md-client-info {
        @extend .md-budget-info;
        background-color: rgba(102, 187, 106, 0.45)!important;
        &:nth-of-type(2) {
          text-transform: none;
        }
      }
      .l-budget-actions {
        flex-basis: 25%;
        display: flex;
        background-color: rgba(0, 175, 255, 0.45);
        border: 1px solid $border-color-input;
        align-items: center;
        justify-content: center;
        .btn {
          min-width: 45px !important;
          margin: 0 5px !important;
        }
      }
      .l-client-actions {
        @extend .l-budget-actions;
        background-color: rgba(102, 187, 106, 0.45)!important;
      }
    }
  }
