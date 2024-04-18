<script lang="ts">
import { defineComponent } from 'vue';

interface Ticket {
  name: string;
  date: string;
}

export default defineComponent({
  data() {
    return {
      upcomingTickets: [] as Ticket[],
      pastTickets: [] as Ticket[],
      ticketsLoaded: false  // Ajout d'une variable pour suivre l'état du chargement des tickets
    };
  },
  mounted() {
    if (!this.ticketsLoaded) {  // Vérifie si les tickets n'ont pas encore été chargés
      this.fetchTickets();
    }
  },
  methods: {
    fetchTickets() {
      // Simulation de données de tickets
      const tickets: Ticket[] = [
        { name: "Perroquet bourré", date: "2024-03-04T19:00:00" },
        { name: "jean jean", date: "2024-03-08T20:00:00" },
        { name: "La maximus fete de fou", date: "2024-04-20T18:00:00" }
        // Ajoutez d'autres tickets au besoin
      ];

      // Date actuelle
      const today = new Date();

      // Tri des tickets
      tickets.forEach(ticket => {
        const ticketDate = new Date(ticket.date);
        if (ticketDate > today) {
          this.upcomingTickets.push(ticket);
        } else {
          this.pastTickets.push(ticket);
        }
      });

      // Met à jour l'état du chargement des tickets
      this.ticketsLoaded = true;
    },
    formatDate(dateString: string): string {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(dateString).toLocaleDateString('en-GB', options);
    }
  }
});
</script>

<template>
  <div class="container">
    <div>
      <h1 class="">Tickets</h1>
    </div>

    <div class="mt-10">

      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap justify-around -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
          <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Soon</button>
          </li>
          <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Past event</button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div class="hidden p-4 rounded-lg " id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <template v-for="(ticket, index) in upcomingTickets" :key="index">
            <a href="/ticket">
              <div class="carte_ticket">
                <div class="container_carte_ticket">
                  <h3>{{ ticket.name }}</h3>
                  <p>{{ formatDate(ticket.date) }}</p>
                </div>
                <div class="">-></div>
              </div>
            </a>
          </template>
        </div>
        <div class="hidden p-4 rounded-lg" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <template v-for="(ticket, index) in pastTickets" :key="index">
            <a href="/ticket">
              <div class="carte_ticket">
                <div class="container_carte_ticket">
                  <h3>{{ ticket.name }}</h3>
                  <p>{{ formatDate(ticket.date) }}</p>
                </div>
                <div class="">-></div>
              </div>
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.carte_ticket {
  margin-top: 2em;
  padding: 0 .3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  color: var(--white);
  border-radius: 10px;
  background-color: var(--primary);
}

.container_carte_ticket {
  text-align: start;
}
</style>