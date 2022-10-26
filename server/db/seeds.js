use bookings;
db.dropDatabase();

db.guests.insertMany([
    {
        guest_name: "Tom Nook",
        guest_email: "tanukiboss@island.com",
        checked_in: false
    },
    {
        guest_name: "Yoshi",
        guest_email: "dinosaur@superhappytree.com",
        checked_in: false
    },
    {
        guest_name: "Samus Aran",
        guest_email: "prime@brinstar.com",
        checked_in: true
    }
])
