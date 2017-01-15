function terminal(el)
{
    var value = el.options[el.selectedIndex].value;
    var textarea = document.getElementById('source');
/*
<option value=C selected="selected">C (gcc 4.8.4)</option>
<option value=CPP>C++ (g++ 4.8.4)</option>
<option value=CSHARP>C# (mono 3.2.8)</option>
<option value=GO>Go (go 1.4.2)</option>
<option value=HASKELL>Haskell (ghc 7.6.3)</option>
<option value=JAVA>Java (openjdk 1.7.0_09)</option>
<option value=LISP>Lisp (csc 4.8.0.5)</option>
<option value=OBJECTIVEC>Objective-C (clang 3.3)</option>
<option value=PASCAL>Pascal (fpc 2.6.2)</option>
<option value=PHP>PHP (php 5.5.9)</option>
<option value=PYTHON>Python (python 2.7.6)</option>
<option value=RUBY>Ruby (ruby 2.1.1)</option>
<option value=R>R (RScript 3.0.2)</option>
*/
    console.log(textarea.value);
    if (value == C) {

        textarea.html = '#include <stdio.h>\
        int main()\
        {\
            printf("Hello World!\n");\
            return 0;\
        }';
    } else if (value == CPP) {
        textarea.html = '#include <iostream>\
using namespace std;\
int main()\
{\
    cout << "Hello World!" << endl;\
    return 0;\
}';
    }

}
