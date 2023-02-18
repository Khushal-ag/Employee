<div align='center'>

![][views] ![][stars] ![][forks] ![][issues] ![][repo-size]

</div>

# Employee Mongoose Data

## Employee Schema

```js
{
    eno: Number,
    ename: String,
    salary: Number,
    dept: {
        deptno: Number,
        deptname: String,
        deptloc: String
    },
    designation: String,
    manager: {
        mgrno: Number,
        mgrname: String,
    },
    project: [
        {
            projname: String,
            projhr: Number,
        }
    ]
}
```

## Pre Requisites

- MongoDB must be configured locally i.e **mongod** must be in running state.
- Node.js must be installed

## What this code does?

- It automatically creates a Database named **company**. If you want to change Database name then edit **dbname** variable in **index.js** file.
- It creates a collection named **employee**.
- It inserts 25 documents in the collection. If you want to increase or decrease number of documents then edit **docNum** variable in **index.js** file.

## Follow these Steps to Fill MongoDB with Employee data 
<br>

- Fetch latest source code from master branch.

```js
khushal-ag@arch:~$ git clone https://github.com/Khushal-ag/Employee
khushal-ag@arch:~$ cd Employee
```

- Run the app with VS Code or with the command line:

```js
khushal-ag@arch:~/SuperMarket$ npm i
khushal-ag@arch:~/SuperMarket$ node index.js
```

<!----------------------------------{ Labels }--------------------------------->

[views]: https://komarev.com/ghpvc/?username=Employee&label=view%20counter&color=red&style=flat
[repo-size]: https://img.shields.io/github/repo-size/Khushal-ag/Employee
[issues]: https://img.shields.io/github/issues-raw/Khushal-ag/Employee
[forks]: https://img.shields.io/github/forks/Khushal-ag/Employee?style=flat
[stars]: https://img.shields.io/github/stars/Khushal-ag/Employee
