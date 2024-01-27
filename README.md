![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![image](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![image](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=whitee)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)


# Fitlog Node Server App

#### The server for the [website](https://main--sweet-sopapillas-1c3774.netlify.app) with frontend located [here](https://github.com/SamDaQueen/fitlog-react-web-app).
#### Web application to help fitness trainers & self-trainers find exercises, make fitness plans, rate exercises & interact socially.

## Endpoints
| Controller | Name                        | HTTP Method | Rote                           |
|------------|-----------------------------|-------------|--------------------------------|
| Users      | Create User                 | POST        | api/users                      |
|            | Read Users                  | GET         | api/users                      |
|            | Read User by Username       | GET         | api/users/username/:username   |
|            | Read User by Id             | GET         | api/users/userId/:uid          |
|            | Read User by Role           | GET         | api/users/role/:role           |
|            | Update User                 | PUT         | api/users/:uid                 |
|            | Delete User                 | DELETE      | api/users                      |
|            | Login                       | POST        | api/users/login                |
|            | Logout                      | POST        | api/users/logout               |
|            | Profile                     | GET         | api/users/profiles             |
|            | Register                    | POST        | api/users/register             |
| Trainers   | Create Trainer              | POST        | api/trainers                   |
|            | Read Trainers by User Id    | GET         | api/trainers/user/:uid         |
|            | Read Users by Trainer Id    | GET         | api/trainers/:tid              |
|            | Update Trainer for User     | PUT         | api/trainers/user/:uid         |
|            | Delete Trainer              | DELETE      | api/trainers/:tid              |
| Activities | Create Activity             | POST        | api/activities                 |
|            | Read Activities             | GET         | api/activities                 |
|            | Read Activities by Username | GET         | api/users/:username/activities |
|            | Delete Activities           | DELETE      | api/activities/:aid            |
| Plan       | Add to Plan                 | POST        | api/users/:uid/add/:eid        |
|            | Read Plan                   | GET         | api/users/:uid/add/:eid        |
|            | Read Exercises by User Id   | GET         | api/users/:uid/plan            |
|            | Delete From Plan            | DELETE      | api/users/:uid/add/:eid        |
| Reviews    | Create Review               | POST        | api/exercises/reviews          |
|            | Read Reviews by Exercise Id | GET         | api/exercises/reviews/:eid     |
|            | Read Reviews by Username    | GET         | api/users/:username/reviews    |
|            | Delete Review               | DELETE      | api/exercises/reviews/:rid     |
| Exercises  | Create Exercises            | POST        | api/exercises                  |  
|            | Read Exercises              | GET         | api/exercises                  |
|            | Read Exercises by Id        | GET         | api/exercises/:eid             |
|            | Read Users by Exercise Id   | GET         | api/exercises/:eid/users       |
---

Created using Node.js, Express.js, and MongoDB for the database. Hosted on Render.com.

> #### **Home page**
<img src="https://github.com/SamDaQueen/fitlog-react-web-app/blob/main/images/home.png" alt="drawing" width="850"/>

> #### **Exercises**
<img src="https://github.com/SamDaQueen/fitlog-react-web-app/blob/main/images/search.png" alt="drawing" width="850"/>

> #### **Exercise details**
<img src="https://github.com/SamDaQueen/fitlog-react-web-app/blob/main/images/details.png" alt="drawing" width="850"/>

> #### **Rating and reviews**
<img src="https://github.com/SamDaQueen/fitlog-react-web-app/blob/main/images/rating.png" alt="drawing" width="850"/>

> #### **Logged out**
<img src="https://github.com/SamDaQueen/fitlog-react-web-app/blob/main/images/logged-out.png" alt="drawing" width="850"/>

> #### **Profile**
<img src="https://github.com/SamDaQueen/fitlog-react-web-app/blob/main/images/self-profile.png" alt="drawing" width="850"/>

> #### **Other's profile**
<img src="https://github.com/SamDaQueen/fitlog-react-web-app/blob/main/images/other-profile.png" alt="drawing" width="850"/>

> #### **Trainer profile**
<img src="https://github.com/SamDaQueen/fitlog-react-web-app/blob/main/images/trainer.png" alt="drawing" width="850"/>
