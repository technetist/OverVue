<template>
    <div class="col-md-4">
        <div class="card event-card">
            <div class="card-title pt-3">
                <h4>{{ event.title }}</h4>
            </div>
            <div class="card-body">
                <p>{{ event.description }}</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Date: {{ event.date }}</li>
                    <li class="list-group-item">Location: {{ event.location }}</li>
                    <li class="list-group-item">Host: {{ event.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: ['event']
    }
</script>
