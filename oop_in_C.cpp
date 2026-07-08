#include<iostream>
using namespace std ;

// Learning class in C++

class human{
    public :
          string name ;
          string occupation ;
          int age ;

           void eat(){
            cout << "This person is eating\n";
           }
           void drink(){
            cout << "This person is drinking\n";
           }
};


int main(){

    human human1 ;
    human1.name = "Arjun";
    human1.age = 19 ;

    cout << human1.name <<endl;
    cout << human1.age << endl ;
    human1.drink();

    return 0 ;
}