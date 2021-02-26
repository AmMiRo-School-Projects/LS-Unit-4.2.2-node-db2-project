exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "123456789",
          make: "Honda",
          model: "Civic",
          milage: "5000"
        },
        {
          id: 2,
          VIN: "123456789a",
          make: "Honda",
          model: "Pilot",
          milage: "1000"
        },
        {
          id: 3,
          VIN: "123456789b",
          make: "Kia",
          model: "Soul",
          milage: "12345"
        },
        {
          id: 4,
          VIN: "123456789c",
          make: "Kia",
          model: "Rio",
          milage: "5000",
          transmissionType: "Automatic",
          titleStatus: "Clear"
        },
        {
          id: 5,
          VIN: "123456789d",
          make: "Jeep",
          model: "Renegade",
          milage: "52000",
          transmissionType: "Manual",
          titleStatus: "Clear"
        }
      ]);
    });
};
