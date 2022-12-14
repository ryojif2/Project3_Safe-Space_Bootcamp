"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("specialization_therapists", [
      {
        // id: 1,
        therapist_id: 1,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 2,
        therapist_id: 1,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 3,
        therapist_id: 1,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 4,
        therapist_id: 1,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 5,
        therapist_id: 2,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 6,
        therapist_id: 2,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 7,
        therapist_id: 2,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 8,
        therapist_id: 2,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 9,
        therapist_id: 2,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 10,
        therapist_id: 3,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 11,
        therapist_id: 3,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 12,
        therapist_id: 3,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 13,
        therapist_id: 3,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 14,
        therapist_id: 3,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 15,
        therapist_id: 3,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 16,
        therapist_id: 4,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 17,
        therapist_id: 4,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 18,
        therapist_id: 4,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 19,
        therapist_id: 4,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 20,
        therapist_id: 4,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 21,
        therapist_id: 4,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 22,
        therapist_id: 5,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 23,
        therapist_id: 5,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 24,
        therapist_id: 5,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 25,
        therapist_id: 5,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 26,
        therapist_id: 6,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 27,
        therapist_id: 6,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 28,
        therapist_id: 6,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 29,
        therapist_id: 6,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        //   id: 30,
        therapist_id: 7,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        //   id: 31,
        therapist_id: 7,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 32,
        therapist_id: 7,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 33,
        therapist_id: 8,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 34,
        therapist_id: 8,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 35,
        therapist_id: 8,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 36,
        therapist_id: 8,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 37,
        therapist_id: 8,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 38,
        therapist_id: 8,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 39,
        therapist_id: 9,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 40,
        therapist_id: 9,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 41,
        therapist_id: 9,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 42,
        therapist_id: 9,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 43,
        therapist_id: 10,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 44,
        therapist_id: 10,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 45,
        therapist_id: 10,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 46,
        therapist_id: 10,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 47,
        therapist_id: 11,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 48,
        therapist_id: 11,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 49,
        therapist_id: 11,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 50,
        therapist_id: 11,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 51,
        therapist_id: 12,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 52,
        therapist_id: 12,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 53,
        therapist_id: 12,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 54,
        therapist_id: 12,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 55,
        therapist_id: 12,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 56,
        therapist_id: 13,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 57,
        therapist_id: 13,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 58,
        therapist_id: 13,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 59,
        therapist_id: 14,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 60,
        therapist_id: 14,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 61,
        therapist_id: 14,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 62,
        therapist_id: 14,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 63,
        therapist_id: 14,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 64,
        therapist_id: 14,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 65,
        therapist_id: 15,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 66,
        therapist_id: 16,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 67,
        therapist_id: 16,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 68,
        therapist_id: 17,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 69,
        therapist_id: 17,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 70,
        therapist_id: 17,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 71,
        therapist_id: 18,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 72,
        therapist_id: 18,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 73,
        therapist_id: 18,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 74,
        therapist_id: 18,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 75,
        therapist_id: 19,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 76,
        therapist_id: 19,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 77,
        therapist_id: 19,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 78,
        therapist_id: 19,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 79,
        therapist_id: 19,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 80,
        therapist_id: 20,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 81,
        therapist_id: 20,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 82,
        therapist_id: 20,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 83,
        therapist_id: 20,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 84,
        therapist_id: 20,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 85,
        therapist_id: 20,
        specialization_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 86,
        therapist_id: 21,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 87,
        therapist_id: 21,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 88,
        therapist_id: 21,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 89,
        therapist_id: 21,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 90,
        therapist_id: 21,
        specialization_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 91,
        therapist_id: 22,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 92,
        therapist_id: 22,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 93,
        therapist_id: 22,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 94,
        therapist_id: 22,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 95,
        therapist_id: 23,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 96,
        therapist_id: 23,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 97,
        therapist_id: 23,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 98,
        therapist_id: 24,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 99,
        therapist_id: 24,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 100,
        therapist_id: 25,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 101,
        therapist_id: 26,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 102,
        therapist_id: 26,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 103,
        therapist_id: 27,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 104,
        therapist_id: 27,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 105,
        therapist_id: 27,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 106,
        therapist_id: 28,
        specialization_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 107,
        therapist_id: 28,
        specialization_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 108,
        therapist_id: 28,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 109,
        therapist_id: 28,
        specialization_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("specialization_therapists", null, {});
  },
};
