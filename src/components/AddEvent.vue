<template>
    <div class="container">
        <div class="row text-center">
            <div class="col-12">
                <h4>Add An Event <i
                        :class="[showForm ?
                        'fas fa-caret-circle-up' :
                         'fas fa-caret-circle-down']"
                        @click="toggleForm"></i></h4>
            </div>
        </div>
        <div class="row" v-if="showForm">
            <div class="col-12">
                <div class="container">
                    <div class="form">
                        <div class="form-group col-sm-12">
                            <label for="event-title">Title</label>
                            <input
                                    id="event-title"
                                    type="text"
                                    class="form-control mb-4"
                                    v-model="event.title">
                        </div>
                        <div class="form-group col-sm-12">
                            <label for="event-description">Description</label>
                            <textarea
                                    id="event-description"
                                    type="text"
                                    class="form-control mb-4"
                                    v-model="event.description"></textarea>
                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <label for="event-date">Date</label>
                                <input
                                        id="event-date"
                                        type="date"
                                        class="form-control"
                                        v-model="event.date">
                            </div>

                            <div class="form-group col">
                                <label for="event-date">Location</label>
                                <input
                                        id="event-location"
                                        type="text"
                                        class="form-control mb-4"
                                        v-model="event.location">
                            </div>
                        </div>
                        <br>
                        <button
                                class="btn btn-sm btn-primary"
                                @click="addEvent"
                        >Add Event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
  import {eventsRef} from "../firebaseApp";

  export default {
    data() {
      return {
        event: {
          title: '',
          description: '',
          date: '',
          location: '',
          email: ''
        },
        showForm: false
      }
    },
    methods: {
      addEvent() {
        this.event.email = this.$store.state.user.email;
        eventsRef.push(this.event);
      },
      toggleForm() {
        this.showForm = this.showForm === false;
      }
    }
  }
</script>
