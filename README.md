<h1 align="center"><a href="https://github.com/christopher-2000/2022_IBM_Code_Challenge_AccidentReportingApp">Accident Reporting App</a></h1>
<p align="center"><strong><q>Accidents can happen at any time,<br>Now you can report them at any time.</q></strong></p>  

## Contents
- <a href="#problem-statement">Problem Statement</a>
- <a href="#personas-of-the-system">Personas of the System</a>
  - <a href="#individuals">Individuals</a>
  - <a href="#police-station">Police Station</a>
  - <a href="#hospital">Hospitals</a>
  - <a href="#ambulance-driver">Ambulance Driver</a>
  - <a href="#emergency-contacts">Emergency</a>
- <a href="#architecture">Architecture</a>
  - <a href="technnologies">Technologies</a>
  - <a href="architecture-1">Architecture</a>
  - <a href="keycomponents">Keycomponents</a>
- <a href="#presentation">Presentation</a>
- <a href="#contributors">Contributors</a>
- <a href="#license-and-acknowledgements">License and Acknowledgements</a>
## Problem Statement  
The major aim of this project is to effectively provide at most support for the victims of Road accidents. This app aims to digitalize the conventional handling of an accident case by ensuring that immediate medical attention is provided to the victims and proper information is shared with the police station, hospital and emergency contacts.

## Personas of the System
### Individuals 
* **Injured Victims:** 
  Injured victim can report the accident or accident is reported automatically by the app if the user is not in a state to report
* **Non Injured Victims:**
  Non injured victims in the accident can report an emergency report or detailed report depending on state of the reporter
* **Witness:**
  A witness who encountered the accident can report the accident by pressing emergency report to send timestamp and location of the accident and can         optionally fill additional details like 
  Photo of the accident (optinal)
  Severity (optional)
  No of ppl injured(Optional).
  Reason(optional) These details are to be provided in report page 
### Police Station: 
 * The police station receives the report from the witness , injured victim or non injured victim to provide best possible support poice can recive the information like location, time ,no of people , severity, vehicle number etc
### Hospital: 
 * Nearby hospital receives information of incoming patient like severity ,no of people ,ambulance location to provide aid
### Ambulance Driver: 
 * Nearby ambulance is contacted to provide support to the victim the ambulance driver is will be given a request to ambulance driver by providing the location of accident and near by hosipital 
### Emergency contacts: 
 * Emergency contacts specified by the user are contacted and message about the accident is sent 



## Architecture
### Technologies
* React-native is used to create all the functionalities and UI in the project as it provides a smooth and responsive user interface, while significantly   reducing load time
* Firebase authentication is used for the target users login  
* Firebase is used for the backend of the project
### Architecture 
* React-native app of the user, police, hospital and ambulance interacts with the firebase-database to create, edit and veiw accident data
* And reacts with firebase-autheticatiion to autheticate the user
* React-native app collects the data from the user based on the components and use-cases and sent to the firebase cloud database
*data is edited accordingly by all the facilities 

![WhatsApp Image 2022-05-09 at 5 26 11 PM](https://user-images.githubusercontent.com/72222785/167405476-0f749702-aeb7-47d1-897b-cf5bfd7e5f9f.jpeg)
![WhatsApp Image 2022-05-09 at 5 26 11 PM (1)](https://user-images.githubusercontent.com/72222785/167405501-1ad16ceb-f8c8-42df-a86c-c20c98963734.jpeg)

### Keycomponents
* **Emergency report** : When a user encounters an accident emergency report component is used to send an sos signal to nearest police, hospital and ambulance with time and location of the accident
* **Accident report** : After emergency report the user can add details that can details that helps the concerned authorities to provide best aid possible
* **Accidents dashboard** : This component shows the accidents reported by you and other users and the authorities can find detailed report
* **Automatic report alert** : This component is shows up with an alert message of an accident detected by sensors on the vehicle and sends sos message automatically if not responded
* **Track ambulance** : This component is used to track ambulance by the victim or authorities 



## 2minutes video

<a href="https://drive.google.com/file/d/1Cub0Kh2wsXUXCu3zMiK6BW9X-NTacyQ0/view?usp=drivesdk">Link of 2 minute video presentation</a>
  
  
## Presentation
<a href="https://docs.google.com/presentation/d/1_WyUTzkIDlSju8iy96b5mTwsHlTRg6wUsjd6aImlZ9I/edit?usp=sharing">Link to the presentation</a>

## Contributors
* <a href="https://www.linkedin.com/in/christopher2000">M G Christopher</a>
* <a href="https://www.linkedin.com/in/kumari-misa-030337207/">Kumari Misa</a>
* <a href="https://www.linkedin.com/in/piyush-bansal-56074a1a6/">Piyush Bansal</a>
* <a href="https://www.linkedin.com/in/rithish-kumar-gajjala-361697206/">G Rithish Kumar</a>
* <a href="https://www.linkedin.com/in/surya-ashish/">B V Surya Ashish</a>

## License and Acknowledgements
