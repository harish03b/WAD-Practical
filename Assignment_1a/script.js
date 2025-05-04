const ctx = document.getElementById('_dm-salesChart').getContext('2d');  
const salesChart = new Chart(ctx, {  
    type: 'line',  
    data: {  
        labels: ['Oct 12', 'Oct 18', 'Oct 24', 'Oct 30', 'Nov 5', 'Nov 11', 'Nov 17'],  
        datasets: [{  
            label: 'Sales',  
            data: [1200, 1900, 700, 1300, 900, 1500, 2500],  
            fill: false,  
            borderColor: 'rgba(75, 192, 192, 1)',  
            tension: 0.1  
        }]  
    },  
    options: {  
        responsive: true,  
        plugins: {  
            legend: {  
                display: true,  
                position: 'top',  
            },  
            title: {  
                display: true,  
                text: 'Sales Data'  
            }  
        }  
    }  
});