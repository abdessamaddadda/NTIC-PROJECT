document.addEventListener("DOMContentLoaded", function () {
    const groupSelect = document.getElementById("groupSelect");
    const scheduleTable = document.getElementById("scheduleTable");
    const scheduleContainer = document.getElementById("scheduleContainer");

    const schedules = {
        // Your schedule data here
        FS1: [
            { day: "Monday", time: "13:30 - 16:00", course: "M.GHENNOU" },
            { day: "Monday", time: "16:00 - 18:30", course: "M.GHENNOU" },
            { day: "Tuesday", time: "13:30 - 16:00", course: "M.YAHYAOUI" },
            { day: "Wednesday", time: "", course: "" },
            { day: "Thursday", time: "8:30 - 11:00", course: "M.GHENNOU" },
            { day: "Thursday", time: "11:00 - 13:30", course: "M.GHENNOU" }, 
            { day: "Friday", time: "8:30 - 11:00", course: "M.YAHYAOUI" }, 
            { day: "Friday", time: "11:00 - 13:30", course: "M.YAHYAOUI" },
            { day: "Saturday", time: "", course: "" },
        ],
        FS2: [
            { day: "Monday", time: "13:30 - 16:00", course: "M.YAHYAOUI" },
            { day: "Monday", time: "16:00 - 18:30", course: "M.YAHYAOUI" },
            { day: "Tuesday", time: "13:30 - 16:00", course: "M.GHENNOU" }, 
            { day: "Tuesday", time: "16:00 - 18:30", course: "M.GHENNOU" },
            { day: "Wednesday", time: "", course: "" },
            { day: "Thursday", time: "13:30 - 16:00", course: "M.YAHYAOUI" }, 
            { day: "Thursday", time: "16:00 - 18:30", course: "M.YAHYAOUI" }, 
            { day: "Friday", time: "13:30 - 16:00", course: "M.GHENNOU" }, 
            { day: "Friday", time: "16:00 - 18:30", course: "M.GHENNOU" },
            { day: "Saturday", time: "", course: "" },
        ],
        FS3: [
            { day: "Monday", time: "13:30 - 16:00", course: "Mme.BELHARAR" },
            { day: "Monday", time: "16:00 - 18:30", course: "Mme.BELHARAR" },
            { day: "Tuesday", time: "", course: "" }, 
            { day: "Wednesday", time: "13:30 - 16:00", course: "M.RACHID" },
            { day: "Wednesday", time: "16:00 - 18:30", course: "M.RACHID" }, 
            { day: "Thursday", time: "13:30 - 16:00", course: "M.GHENNOU" }, 
            { day: "Thursday", time: "16:00 - 18:30", course: "M.GHENNOU" }, 
            { day: "Friday", time: "8:30 - 11:00", course: "M.RACHID" }, 
            { day: "Friday", time: "11:00 - 13:30", course: "M.RACHID" },
            { day: "Saturday", time: "", course: "" }, 
        ],
        FS4: [
            { day: "Monday", time: "13:30 - 16:00", course: "M.RACHID" },
            { day: "Monday", time: "16:00 - 18:30", course: "M.RACHID" },
            { day: "Tuesday", time: "", course: "" },
            { day: "Wednesday", time: "8:30 - 13:30", course: "M.GHENNOU" },
            { day: "Wednesday", time: "11:00 - 13:30", course: "M.GHENNOU" },
            { day: "Wednesday", time: "13:30 - 16:00", course: "Mme.BELHARAR" },
            { day: "Thursday", time: "13:30 - 16:00", course: "M.RACHID" }, 
            { day: "Thursday", time: "16:00 - 18:30", course: "M.RACHID" }, 
            { day: "Friday", time: "8:30 - 11:00", course: "Mme.BELHARAR" }, 
            { day: "Friday", time: "11:00 - 13:30", course: "Mme.BELHARAR" },
            { day: "Saturday", time: "", course: "" },
        ],
        FS5: [
            { day: "Monday", time: "8:30 - 11:00", course: "M.MOUSTAID" },
            { day: "Monday", time: "11:00 - 13:30", course: "M.MOUSTAID" },
            { day: "Tuesday", time: "13:30 - 16:00", course: "Mme.BELHARAR" }, 
            { day: "Tuesday", time: "16:00 - 18:30", course: "Mme.BELHARAR" }, 
            { day: "Wednesday", time: "13:30 - 16:00", course: "M.MOUSTAID" },
            { day: "Wednesday", time: "16:00 - 18:30", course: "M.MOUSTAID" }, 
            { day: "Thursday", time: "", course: "" },
            { day: "Friday", time: "13:30 - 16:00", course: "M.RHANDARI" }, 
            { day: "Friday", time: "16:00 - 18:30", course: "M.RHANDARI" },
            { day: "Saturday", time: "", course: "" },
            { day: "Saturday", time: "", course: "" }, 
        ],
        FS6: [
            { day: "Monday", time: "8:30 - 11:00", course: "Mme.MANDRI" },
            { day: "Monday", time: "11:00 - 13:30", course: "M.SALMA" },
            { day: "Tuesday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Tuesday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" }, 
            { day: "Wednesday", time: "", course: "" },
            { day: "Thursday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Thursday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" }, 
            { day: "Friday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Friday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" },
            { day: "Saturday", time: "", course: "" },
        ],
        FS7: [
            { day: "Monday", time: "8:30 - 11:00", course: "Mme.MANDRI" },
            { day: "Monday", time: "11:00 - 13:30", course: "M.SALMA" },
            { day: "Tuesday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Tuesday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" }, 
            { day: "Wednesday", time: "", course: "" },
            { day: "Thursday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Thursday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" }, 
            { day: "Friday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Friday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" },
            { day: "Saturday", time: "", course: "" },
        ],
        FS8: [
            { day: "Monday", time: "8:30 - 11:00", course: "Mme.MANDRI" },
            { day: "Monday", time: "11:00 - 13:30", course: "M.SALMA" },
            { day: "Tuesday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Tuesday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" }, 
            { day: "Wednesday", time: "", course: "" },
            { day: "Thursday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Thursday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" }, 
            { day: "Friday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Friday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" },
            { day: "Saturday", time: "", course: "" },
        ],
        FS9: [
            { day: "Monday", time: "8:30 - 11:00", course: "Mme.MANDRI" },
            { day: "Monday", time: "11:00 - 13:30", course: "M.SALMA" },
            { day: "Tuesday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Tuesday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" }, 
            { day: "Wednesday", time: "", course: "" },
            { day: "Thursday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Thursday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" }, 
            { day: "Friday", time: "8:30 - 11:00", course: "Mme.KHAMLICHI" }, 
            { day: "Friday", time: "11:00 - 13:30", course: "Mme.KHAMLICHI" },
            { day: "Saturday", time: "", course: "" },
        ],
    };

    groupSelect.addEventListener("change", function () {
        const selectedGroup = groupSelect.value;
        const scheduleData = schedules[selectedGroup];
        displaySchedule(scheduleData);
    });

    // Updated displaySchedule function with specific time slots
    function displaySchedule(scheduleData) {
        scheduleTable.innerHTML = ""; // Clear previous schedule if any

        if (scheduleData) {
            const days = [...new Set(scheduleData.map((item) => item.day))];
            const timeSlots = [
                "8:30 - 11:00",
                "11:00 - 13:30",
                "13:30 - 16:00",
                "16:00 - 18:30",
            ];

            // Create table header row for days
            const headerRow = scheduleTable.insertRow();
            headerRow.insertCell(); // Empty cell for the top-left corner

            for (const day of days) {
                const dayHeader = headerRow.insertCell();
                dayHeader.textContent = day;
            }

            // Create table rows for each time slot
            for (const timeSlot of timeSlots) {
                const row = scheduleTable.insertRow();
                const timeCell = row.insertCell();
                timeCell.textContent = timeSlot;

                // Create empty cells for each day
                for (const day of days) {
                    const courseCell = row.insertCell();
                    const course = scheduleData.find(
                        (item) => item.day === day && item.time === timeSlot
                    );
                    courseCell.textContent = course ? course.course : "";
                }
            }

            // Show the container of the schedule
            scheduleContainer.style.display = "block";
        } else {
            scheduleTable.textContent = "Aucun emploi du temps trouvé pour ce groupe.";
        }
    }
});
