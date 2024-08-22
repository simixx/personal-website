document.getElementById('assessment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const industry = document.getElementById('industry').value;
    const size = document.getElementById('size').value;

    // Basic risk assessment logic (placeholder)
    let riskLevel = 'Medium';
    if (size < 50) {
        riskLevel = 'Low';
    } else if (size > 500) {
        riskLevel = 'High';
    }

    const result = `Based on your industry (${industry}) and company size (${size}), your risk level is: ${riskLevel}.`;

    document.getElementById('assessment-result').textContent = result;
});
