class Person:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def my_func(self):
        print("Hello world",self.age)

    def add(self,a,b):
        print(a+b)    
        
s1=Person("suhas","23")
s2=Person("gayathri","24")

print(s2.name,s2.age)
s2.my_func()
s2.add(2,3)
