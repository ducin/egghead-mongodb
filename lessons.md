# `mongosh` (mongo shell)

```ts
use local // database
db.createCollection('projects')
db.'projects'.drop
db['projects'].count() // 0
db['projects'].insertMany(projects)
// db['projects'].remove({}) // 0

db['employees'].insertMany(projects)
db.employees.insertMany(projects)
```

## Selecting the employees Collection:

```ts
const employeesCollection = db.collection('employees');
```

## Inserting a New Employee Document

```ts
const newEmployee = {
  id: 11,
  name: 'Grace Hopper',
  position: 'Senior Developer',
  age: 45,
  skills: ['JavaScript', 'Node.js', 'Docker', 'Kubernetes'],
  salary: 10000,
  personalInfo: {
    address: '345 Tech Dr, Anytown',
    phone: '555-1122',
    email: 'grace.hopper@example.com',
  },
};
db.employees.insertOne(newEmployee);
```

## Inserting Multiple Employee Documents

```ts
const newEmployees = [
  {
    id: 12,
    name: 'Alan Turing',
    position: 'AI Researcher',
    age: 38,
    skills: ['Python', 'TensorFlow', 'Keras', 'Deep Learning'],
    salary: 11000,
    personalInfo: {
      address: '678 Logic Ln, Anytown',
      phone: '555-3344',
      email: 'alan.turing@example.com',
    },
  },
  {
    id: 13,
    name: 'Ada Lovelace',
    position: 'Data Architect',
    age: 32,
    skills: ['SQL', 'Data Modeling', 'ETL', 'Cloud Computing'],
    salary: 9500,
    personalInfo: {
      address: '901 Algorithm Ave, Anytown',
      phone: '555-5566',
      email: 'ada.lovelace@example.com',
    },
  },
];
db.employees.insertMany(newEmployees);
```

## Finding an Employee Whose Name Starts with "Ali":

```ts
db.employees.findOne({ name: 'Alice Smith' });
db.employees.findOne({ name: { $regex: '^Ali' } });
db.employees.findOne({ 'personalInfo.email': { $regex: '@example.com$' } });
db.employees.findOne({ skills: { $in: ['JavaScript'] } });
// same:
db.employees.findOne({ age: 35 });
db.employees.findOne({ age: { $ne: 30 } });

db.employees.findOne({ age: { $lt: 35 } });

db.employees.findOne({
  $and: [
    { skills: { $in: ['JavaScript', 'SQL'] } },
    { age: { $lt: 35 } },
  ],
})

db.employees.find({
  $and: [
    { skills: { $all: ['Tableau', 'SQL'] } },
  ],
})
// same as:
db.employees.find({
  $and: [
    { skills: 'Tableau' },
    { skills: 'SQL' },
  ]
})
```

## Finding Employees Who Know JavaScript or SQL and are Younger Than 35:

```ts
db.employees.find({
  $and: [
    { skills: { $in: ['JavaScript', 'SQL'] } },
    { age: { $lt: 35 } },
  ],
})
```

```ts
db.employees.find({
  $and: [
    { skills: { $all: ['Tableau', 'SQL'] } },
  ],
})
```
same as:
```ts
db.employees.find({
  $and: [
    { skills: 'Tableau' },
    { skills: 'SQL' },
  ]
})
```
more:
```ts
db.employees.find({
  $and: [
    { position: { $in: ['Software Engineer', 'Data Scientist'] } },
    { salary: { $gt: 7000 } },
  ],
})

employeesCollection.find({
  $and: [
    { skills: { $regex: 'Data' } },
    { age: { $ne: 30 } },
  ],
})

employeesCollection.find({
  $and: [
    { 'personalInfo.phone': { $regex: '1234' } },
  ],
})

db.employees.find({
  $expr: { $lte: ['$age', '$salary'] } 
})

// 🔥
employeesCollection.find({
  $and: [
    { skills: 'SQL' }
    { $expr: { $gte: [{ $size: '$skills' }, 4] } },
  ],
})
```


## Counting the Number of Employees with "Engineer" in Their Position:

```ts
db.employees.countDocuments({ position: { $regex: 'Engineer' } });
```

## Projecting Name, Position, and First Skill (from Skills Array):

```ts
db.employees.find(
  {},
  { name: 1, position: 1, _id: 0, 'personalInfo.email': 1 }
)

db.employees.findOne({}, {
  name: 1, position: 1, _id: 0, 'skills': { $slice: 2 }
})

db.employees.findOne({}, {
  name: 1, position: 1, _id: 0, 'skills': { $slice: [2,3] }, 'personalInfo.email': 1
})

db.employees.find({skills: { $regex: 'SQL' }}, {
  name: 1, position: 1, _id: 0, 'skills.$': 1, 'personalInfo.email': 1
})
```

## Updating an Employee's Position and Adding a New Skill:

```ts
const newValues = {
  $set: { position: 'Lead Data Scientist' },
  $push: { skills: 'Big Data' },
};
db.employees.updateOne({ name: 'Bob Johnson' }, newValues)

// albo wiele na raz
db.employees.updateOne(
  { name: 'Bob Johnson' },
  { salary: 20000 }
)

db.employees.updateMany(
  {},
  // inc all
  { $set: { salary: { $inc: 500 } } }
  { $set: { "personalInfo.phone": "111-222" } }
  { $set: { 'a.b.c': 500 } }
  // remove fields:
  { $unset: { name: "", position: "" } }
  // remove nested:
  { $unset: { "a.b.c": "" } }
  { $unset: { "a.b.c": "" } } // matched - 1, but modified - none
  // ARRAYS
  // push:
  { $push: { skills: 'k8s' } }
  { $push: { skills: { $each: ['Java', '.Net'] } } }
  // Remove AWS skill
  { $pull: { skills: 'AWS' } }
  // remove multiple items at the same time:
  { $pull: { skills: { $in: ['JavaScrpt', 'SQL'] } } }
)
```

## Updating Salary and Address for All Software Engineers, and Removing a Skill:

```ts
const query = { position: 'Software Engineer' };
const newValues = {
  $set: { 'personalInfo.address': 'New Tech Park, Anytown', salary: { $inc: 500 } },
  $pull: { skills: 'AWS' }, // Remove AWS skill
};
db.employees.updateMany(query, newValues);
```

## Deleting an Employee Whose Email Contains "@example.com":

```ts
const query = { 'personalInfo.email': { $regex: '@example.com' } };
db.employees.deleteOne(query, (err, result) => {
  if (err) throw err;
  console.log(`Deleted employees: ${result.deletedCount}`);
});
```

## Deleting Employees Older Than 40 and Earning More Than 8000:

```ts
db.employees.deleteMany({
  $and: [{
    age: { $gt: 40 }
  }, {
    salary: { $gt: 8000 }
  }]
});
```

## Sorting Employees by Salary (Descending) and then by Age (Ascending):

```ts
db.employees.find()
  .sort({ salary: -1, age: 1 });
```

## Limiting to the Top 2 Highest Paid Employees Who Also Know JavaScript:

```ts
db.employees
  .find({ skills: 'JavaScript' })
  .sort({ salary: -1 })
  .limit(2);
  // .count
```

## Finding Employees by searching the skills Field (Text Search for employees proficient in 'Data' or 'SQL'):

```ts
db.employees.createIndex({ skills: "text" }, (err, result) => {
    if (err) throw err;
    console.log("Text index created");
    employeesCollection.find({ $text: { $search: "Data SQL" } });
```

## Working with dates

```ts
db.customers.updateOne(
   { _id: 1 },
   { $set: { updatedAt: true } }
   {
     $currentDate: {
        updatedAt: true,
        "updatedAt": { $type: "timestamp" }
     },
```

## Bulk Write Operations (Adding, Updating Skills, and Deleting Employees based on complex criteria):

```ts
var bulk = db.music.initializeOrderedBulkOp();
bulk.insert( { name: "John Doe" } );
bulk.find( { "name": "Bob Johnson" } ).removeOne();
bulk.execute( );

db.pizzas.bulkWrite( [
  { insertOne: { document: { name: "Jane Doe" } } },
  { deleteOne: { filter: { name: "Ada Lovelace"} } },
] )
```

or:

```ts
db.employees.bulkWrite([
  {
    insertOne: {
      document: {
        id: 9,
        name: 'Linus Torvalds',
        position: 'Kernel Developer',
        age: 52,
        skills: ['C', 'Linux', 'Git'],
        salary: 12000,
        personalInfo: {
          address: 'Somewhere, Finland',
          phone: 'N/A',
          email: 'linus@example.com',
        },
      },
    },
  },
  {
    updateOne: {
      filter: { name: 'Alice Smith' },
      update: { $push: { skills: 'TypeScript' }, $inc: { salary: 500 } },
    },
  },
  {
    deleteOne: {
      filter: { age: { $lt: 26 }, 'personalInfo.address': { $regex: 'Elm Rd' } },
    },
  },
]);
```
