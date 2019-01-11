#3 variables. 2 are text files, last one is $1
textfileOne=textfileOne.txt
textfileTwo=textfileTwo.txt
specialVar=$1
#correct username and password
correctUsername="kaleb"
correctPassword="password"

#if statement to check if $1 is null. (to check if no input was given)
    if [[ specialVar == null ]]
    then
        echo "uh oh, we got a $1 null error!"
        exit
    else
        continue
    fi
#prompt user for username and store it
echo "Username: "
read username
#prompt user for password and store it 
echo "Password: "
read password
#if statements to validate username and password
if [[ $username != "kaleb" ]]; then
    echo "Incorrect username or password..."
    exit
    else
    continue
fi

if [[ $password != "password" ]]; then
        echo "Incorrect username or password..."
        exit
    else
        continue
fi

#message Authentication Accepted, Thanks {username}! Now lets get on with that script
echo "Authentication Accepted, thanks $username! Now lets get on with that script"
#tell user Script is Starting
echo "Engage Script sequence *space ship noises*"

#create new directory in current directory
mkdir newDir
#change to the new directory just created
cd newDir
#write a message to a file
echo "a message" > $textfileOne
#move .txt var to original starting dir
mv $textfileOne ..
#echo current dir to terminal
echo | pwd
#cd to parent dir
cd ..

#create new dir w/ name TXT
mkdir TXT
#write $1 to the 2nd .txt var
echo $1 > $textfileTwo
#mv .txt var 1 and .txt var 2 to TXT
mv $textfileOne TXT | mv $textfileTwo TXT
#delete newDir created earlier, not needed anymore
rm -rf newDir
#cd to TXT
cd TXT
#print the file names and contents of variables to terminal
find "$textfileOne"
cat $textfileOne
find "$textfileTwo"
cat $textfileTwo
#print current directory
pwd
#list the contents of the dir
ls

#tell user "Script finished," and if variable 1 and variable 2 are in the txt folder
echo "Script is finished!"
#find out if the 2 variables are in TXT
if [[ -f $textfileOne ]]; then
    echo "$textfileOne is here!"
    continue
    else
    echo "WHERE DID $textfileOne GO??"
    exit
fi

if [[ -f $textfileTwo ]]; then
    echo "$textfileTwo is here!"
    continue
    else
    echo "WHERE DID $textfileTwo GO??"
    exit
fi


