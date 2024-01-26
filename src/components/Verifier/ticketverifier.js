

// // ticketVerifier.js

// function acceptTicket(id, element) {
//   if (window.confirm("Are you sure you want to accept the Payment?")) {
//     fetch("/ticketVerifier/", {
//       method: "POST",
//       body: JSON.stringify({
//         id: id,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         if (json.hasOwnProperty("msg")) {
//           document
//             .getElementById("ticket_" + id)
//             .classList.remove("bg-red-500/60");
//           document
//             .getElementById("ticket_" + id)
//             .classList.add("bg-green-500/60");
//           element.disabled = true;
//           element.innerHTML = "Accepted";
//         } else {
//           alert(json.error);
//         }
//       });
//   }
// }

// function ticketUpdater(element) {
//   let tickets = document.getElementsByClassName("ticket");
//   for (let ticket = 0; ticket < tickets.length; ticket++) {
//     const currentTicket = tickets[ticket];
//     if (
//       !currentTicket
//         .getAttribute("data-id")
//         .toLowerCase()
//         .includes(element.value.toLowerCase())
//     ) {
//       currentTicket.classList.add("hidden");
//     } else {
//       currentTicket.classList.remove("hidden");
//     }
//   }
// }


