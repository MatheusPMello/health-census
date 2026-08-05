const FALLBACK_CONDITIONS_DATA = {
  "conditions": [
    {
      "name": "Thyroid",
      "imagesrc": "thyroid.jpg.png",
      "symptoms": ["Fatigue", "Weight gain or loss", "Dry skin", "Muscle weakness", "Irregular menstrual periods"],
      "prevention": ["Eat a balanced diet", "Exercise regularly", "Get regular check-ups"],
      "treatment": "Medication like levothyroxine may be prescribed by a doctor."
    },
    {
      "name": "Diabetes",
      "imagesrc": "diabeties.jpg",
      "symptoms": ["Frequent urination", "Increased thirst", "Blurry vision", "Fatigue", "Slow healing of cuts or sores"],
      "prevention": ["Maintain a healthy weight", "Follow a balanced diet", "Regular exercise"],
      "treatment": "Management includes medication, insulin therapy, and lifestyle changes."
    },
    {
      "name": "High Blood Pressure",
      "imagesrc": "blood_pressure.jpg",
      "symptoms": ["Headaches", "Shortness of breath", "Chest pain", "Dizziness", "Blurred or double vision"],
      "prevention": ["Reduce salt intake", "Exercise regularly", "Maintain a healthy weight"],
      "treatment": "Medications like ACE inhibitors or diuretics may be prescribed."
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const addPatientForm = document.getElementById("addPatientForm");
  const report = document.getElementById("report");
  const btnSearch = document.getElementById("btnSearch");
  const resultDiv = document.getElementById("result");
  
  const patients = [];

  function addPatient(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    patients.push({ name, gender, age, condition });
    
    addPatientForm.reset(); // Native form reset
    generateReport();
  }

  function generateReport() {
    const numPatients = patients.length;
    const conditionsCount = {
      "Diabetes": 0,
      "Thyroid": 0,
      "High Blood Pressure": 0,
    };
    const genderConditionsCount = {
      Male: { "Diabetes": 0, "Thyroid": 0, "High Blood Pressure": 0 },
      Female: { "Diabetes": 0, "Thyroid": 0, "High Blood Pressure": 0 },
    };

    for (const patient of patients) {
      if (conditionsCount[patient.condition] !== undefined) {
        conditionsCount[patient.condition]++;
        genderConditionsCount[patient.gender][patient.condition]++;
      }
    }

    // Build the HTML string in memory to prevent DOM thrashing
    let reportHTML = `Number of patients: ${numPatients}<br><br>`;
    
    reportHTML += `Conditions Breakdown:<br>`;
    for (const condition in conditionsCount) {
      reportHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }

    reportHTML += `<br>Gender-Based Conditions:<br>`;
    for (const gender in genderConditionsCount) {
      reportHTML += `${gender}:<br>`;
      for (const condition in genderConditionsCount[gender]) {
        reportHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
      }
    }

    // Single DOM update
    report.innerHTML = reportHTML;
  }

  function renderCondition(condition) {
    if (condition) {
      const symptoms = condition.symptoms.join(', ');
      const prevention = condition.prevention.join(', ');
      const treatment = condition.treatment;

      let html = `<h2>${condition.name}</h2>`;
      html += `<img src="${condition.imagesrc}" alt="${condition.name} Image">`;
      html += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
      html += `<p><strong>Prevention:</strong> ${prevention}</p>`;
      html += `<p><strong>Treatment:</strong> ${treatment}</p>`;
      
      resultDiv.innerHTML = html;
    } else {
      resultDiv.innerHTML = '<p>Condition not found.</p>';
    }
  }

  function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase().trim();
    if (!input) return;

    resultDiv.innerHTML = '<p>Searching...</p>';

    fetch('health_analysis.json')
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        const condition = data.conditions.find(item => item.name.toLowerCase() === input);
        renderCondition(condition);
      })
      .catch(error => {
        console.warn('Fetch failed (likely file protocol CORS), using fallback data:', error);
        const condition = FALLBACK_CONDITIONS_DATA.conditions.find(item => item.name.toLowerCase() === input);
        renderCondition(condition);
      });
  }

  // Event Listeners
  addPatientForm.addEventListener("submit", addPatient);
  btnSearch.addEventListener("click", searchCondition);
  
  // Allow pressing Enter in the search input
  document.getElementById('conditionInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchCondition();
    }
  });
});