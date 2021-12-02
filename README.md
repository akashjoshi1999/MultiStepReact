# multi step form project

## Requirements:

The goal is to create a multistep form similar to this one: https://preview.pro.ant.design/form/step-form?navTheme=light&primaryColor=%231890ff&layout=mix&fixSiderbar=true&title=Ant+Design+Pro

- fields with [*] are required.
- each step will have next and/or prev buttons depending on whether it is a first, last or any of the page in the middle. The last step will have a submit button as well.
- User can navigate among any steps without filling out any fields. However, when you navigate away from let's say step 1 to step 3, you have to show an error status in step 1 if the required fields are not filled out. As soon as the required fields are filled out that error code must be replaced with a finished/completed status. Example: https://codesandbox.io/s/8u033?file=/index.js
- User can't submit without filling out required fields.
- User can go back to any previous steps of next steps regardless of the required fields are completed or not. Just make sure that you show proper error or finished status as mentioned above.

## Step 1: personal Details

### Creation Date & Time [*]: date-picker default value today

### Name[*]: input

- First
- Last
- Email: input

### Gender[*]: radio button

- Female
- Male
- Undifferentiated

### Age: input

### Mode of transportation: checkbox with multiple choices allowed

- Car
- Motorbike
- Bicycle
- Boat

## Step 2: Residential Details:

### Address: h3 tag as title only

#### Address Line 1[*]: input

#### Address Line 2: input

#### City[*]: input

#### State[*]: input with suggestions in dropdown as user types

#### Country[*]: input with suggestions in dropdown in as user types

## Step 3: Health and Fitness Regime:

### Alcohol use: radio

- No
- Yes
- Not Anymore

### Smoking: radio

- No
- Yes
- Not Anymore

### Exercise[*]: checkbox with multiple selection allowed

- running/jogging
- cardio
- strength training
- idle or no exercise
