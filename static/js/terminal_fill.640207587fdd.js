function terminal(el)
{
    var value = el.selectedIndex;
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
    if (value == 0) {
        textarea.value = '#include <stdio.h>\n\n\
        int main()\n\
        {\n\
            printf("Hello World!");\n\
            return 0;\n\
        }';
    } else if (value == 1) {
        textarea.value = '#include <iostream>\n\n\
        using namespace std;\n\
        int main()\n\
        {\n\
            cout << "Hello World!" << endl;\n\
            return 0;\n\
        }';
    } else if (value == 2) {
        textarea.value = 'using System;\n\
        using System.Numerics;\n\
        class MyClass {\n\
            static void Main(string[] args) {\n\
                /*\n\
                 * Read input from stdin and provide input before running\n\
                var line1 = System.Console.ReadLine().Trim();\n\
                var N = Int32.Parse(line1);\n\
                for (var i = 0; i < N; i++) {\n\
                    System.Console.WriteLine("Hello World");\n\
                }\n\
                */\n\n\
                System.Console.WriteLine("Hello World!");\n\
            }\n\
        }';
    } else if (value == 3) { // go
        textarea.value = 'package main\n\n\
        import "fmt"\n\n\
        func main() {\n\
        	fmt.Println("Hello World!")\n\
        }';
    } else if (value == 4) {  // haskell
        textarea.value = 'module Main where\n\
        main=putStrLn "Hello World!"';
    } else if (value == 5) { //java
        //        textarea.value = '/* IMPORTANT: Multiple classes and nested static classes are supported * /\n\n\

        /*\n\
         * uncomment this if you want to read input.\n\
        //imports for BufferedReader\n\
        import java.io.BufferedReader;\n\
        import java.io.InputStreamReader;\n\n\
        //import for Scanner and other utility  classes\n\
        import java.util.*;\n\
//       * /\n\n\
        class TestClass {\n\
            public static void main(String args[] ) throws Exception {\n\
                System.out.println("Hello World!");\n\
            }\n\
        }';
   */
        textarea.value = 'public class TestClass {\n\
            public static void main(String[] args) {\n\
                System.out.println("Hello World!");\n\
            }\n\
        }';
    } else if (value == 6) { // lisp
        textarea.value = '(print "Hello World")';
    } else if (value == 7) { // Objective-C
        textarea.value = '#include <stdio.h>\n\n\
        int main()\n\
        {\n\
            printf("Hello World!");\n\
            return 0;\n\
        }';
    } else if (value == 8) { // pascal
        textarea.value = 'program Hello;\n\
        begin\n\
            writeln (\'Hello World!\');\n\
        end.';
    } else if (value == 9) { // php
        textarea.value = '<?php\n\
        /*\n\
         * Read input from stdin and provide input before running code\n\
        fscanf(STDIN, "%s\n", $name);\n\
        echo "Hi, ".$name;\n\
        */\n\
        echo "Hello World!";\n\
        ?>';
    } else if (value == 10) {  // python
        textarea.value = '\'\'\'\n\
        # Read input from stdin and provide input before running code\n\
        name = raw_input(\'What is your name?\n\')\n\
        print \'Hi, %s.\' % name\n\
        \'\'\'\n\
print \'Hello World!\'\n\
        ';
    } else if (value == 11) {  // ruby
        textarea.value = '=begin\n\
        # Read input from stdin and provide input before running code\n\
        print "Please enter your name: "\n\
        name = gets.chomp\n\
        print "Hi #{name}\n"\n\
=end\n\
print \'Hello World!\'';
    } else if (value == 12) {  // r
        textarea.value = 'cat("Hello World!")\n';
    }

}
