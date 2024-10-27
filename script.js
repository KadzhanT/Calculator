const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const startingBid = Number(document.getElementById('startingBid').value);
    
    if (!name || !startingBid) {
        alert("Please enter a name and starting bid.");
        return;
    }

    const educationFactor = Number(document.getElementById('education').value);
    const wealthFactor = Number(document.getElementById('netWorth').value);
    const casteIncrement = Number(document.getElementById('caste').value);
    
    const skills = [
        document.getElementById('musician').checked ? Number(document.getElementById('musician').value) : 0,
        document.getElementById('cook').checked ? Number(document.getElementById('cook').value) : 0,
        document.getElementById('easygoing').checked ? Number(document.getElementById('easygoing').value) : 0,
        document.getElementById('singer').checked ? Number(document.getElementById('singer').value) : 0
    ];

    const ageFactor = document.querySelector('input[name="age"]:checked') ? 
                      Number(document.querySelector('input[name="age"]:checked').value) : 1;

    const reputationFactors = [
        document.getElementById('gossipParents').checked ? Number(document.getElementById('gossipParents').value) : 1,
        document.getElementById('gossipCharacter').checked ? Number(document.getElementById('gossipCharacter').value) : 1,
        document.getElementById('generalGossip').checked ? Number(document.getElementById('generalGossip').value) : 1
    ];

    let totalSkills = skills.reduce((acc, skillValue) => acc + skillValue, 0);
    
    
    let finalPrice = startingBid * educationFactor * wealthFactor * ageFactor;

    reputationFactors.forEach(repFactor => {
        if (repFactor < 0) {
            finalPrice += repFactor; 
        } else {
            finalPrice *= repFactor; 
        }
    });
    finalPrice += + casteIncrement + totalSkills;

    
    document.getElementById('finalPrice').innerHTML = `The final price for ${name} is $${finalPrice.toFixed(2)}`;
});
