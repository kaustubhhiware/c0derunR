function terminal(el)
{
    var value = el.selectedIndex;
    var textarea = document.getElementById('source');
/*
			  <option value=C selected="selected">C (gcc 4.8.4)</option>
              <option value=CPP>C++ (g++ 4.8.4)</option>
              <option value="CPP14">C++14 (g++ 5.4.0)</option>
              <option value=CSHARP>C# (mono 3.2.8)</option>
              <option value="ERLANG">Erlang (erts 8.3)</option>
              <option value=GO>Go (go 1.4.2)</option>
              <option value=HASKELL>Haskell (ghc 7.6.3)</option>
              <option value=JAVA>Java (openjdk 1.7.0_09)</option>
              <option value="JAVASCRIPT">JavaScript (Rhino 1.7)</option>
              <option value="JAVASCRIPT_NODE">JavaScript (Node.js v6.11.0)</option>
              <option value="KOTLIN">Kotlin (1.1.2-2)</option>
              <option value=LISP>Lisp (csc 4.8.0.5)</option>
              <option value=OBJECTIVEC>Objective-C (clang 3.3)</option>
              <option value="OCTAVE">Octave (gnu octave 4.0.0)</option>
              <option value=PASCAL>Pascal (fpc 2.6.2)</option>
              <option value=PHP>PHP (php 5.5.9)</option>
              <option value=PYTHON>Python (python 2.7.6)</option>
              <option value="PYTHON3">Python 3 (python 3.5.2)</option>
              <option value=R>R (RScript 3.0.2)</option>
              <option value=RUBY>Ruby (ruby 2.1.1)</option>
              <option value="RUST">Rust (rustc 1.15.1)</option>
              <option value="SWIFT">Swift (swift 3.1.1)</option>
              <option value="VB">Visual Basic (mono 4.6, vbnc 0.0.0.5943)</option>
*/
    if (value == 0) { //C
        textarea.value = '#include <stdio.h>\n\n\
        int main()\n\
        {\n\
            printf("Hello World!\n");\n\
            return 0;\n\
        }';
	} else if (value == 1) { //C++
        textarea.value = '#include <iostream>\n\n\
        using namespace std;\n\
        int main()\n\
        {\n\
            cout << "Hello World!" << endl;\n\
            return 0;\n\
        }';
	} else if (value == 2) { //C++14
    	textarea.value='#include<iostream>\n\n\
    	using namespace std;\n\
    	int main()\n\
    	{\n\
    		std::cout<<"Hello World!";\n\
    		return 0;\n\
    	}';

    } else if (value ==3 ){ //C#
        textarea.value = 'using System;\n\
        using System.Numerics;\n\
        class MyClass {\n\
            static void Main(string[] args) {\n\
                /*\n\
                 * Read input from stdin and provide input before running\n\
                var line1 = System.Console.ReadLine().Trim();\n\
                var N = Int32.Parse(line1);\n\
                for (var i = 0; i < N; i++) {\n\
                    System.Console.WriteLine("hello world");\n\
                }\n\
                * /\n\n\
                System.Console.WriteLine("Hello World!\n");\n\
            }\n\
        }';

    } else if (value == 4){ //Erlang
    	textarea.value='-module(helloworld).\n\
		-export([start/0]).\n\
		start() -> \n\
			io:fwrite("Hello, world!\n").'

    } else if (value == 5) { // go
        textarea.value = 'package main\n\n\
        import "fmt"\n\n\
        func main() {\n\
        	fmt.Println("Hello World!")\n\
        }';
    } else if (value == 6) {  // haskell
        textarea.value = 'module Main\n\
        where\n\n\
        main=putStrLn "Hello World!\n"';
    } else if (value == 7) { //java
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
   */} else if (value == 8){ //JS
   		textarea.value='console.log("Hello World")'
   	
   	} else if (value == 9){ //JS node
   		textarea.value='console.log("Hello World")'
   	
   	} else if (value == 10){ //KOTLIN
   		textarea.value='fun main(args :Array<String>\n\n\
   		{\n\
   			println("Hello, world!")\n\
   		}'
	
	} else if (value == 11) { // lisp
        textarea.value = '(display "Hello World!")';
    
    } else if (value == 12) { // Objective-C
        textarea.value = '#include <iostream>\n\n\
        using namespace std;\n\
        int main()\n\
        {\n\
            cout << "Hello World!" << endl;\n\
            return 0;\n\
        }';

    } else if (value == 13){ //Octave
    	textarea.value='disp("Hello World");'

    }else if (value == 14) { // pascal
        textarea.value = 'program Hello;\n\
        begin\n\
            writeln (\'Hello World!\');\n\
        end.';

    } else if (value == 15) { // php
        textarea.value = '<?php\n\
        /*\n\
         * Read input from stdin and provide input before running code\n\
        fscanf(STDIN, "%s\n", $name);\n\
        echo "Hi, ".$name;\n\
        * /\n\
        echo "Hello World!";\n\
        ?>';
    } else if (value == 16) {  // python
        textarea.value = '\'\'\'\n\
        # Read input from stdin and provide input before running code\n\
        name = raw_input(\'What is your name?\n\')\n\
        print \'Hi, %s.\' % name\n\
        \'\'\'\n\
print \'Hello World!\'\n\
        ';

    } else if (value ==17){ //python 3 
    textarea.value = '\'\'\'\n\
        # Read input from stdin and provide input before running code\n\
        name = raw_input(\'What is your name?\n\')\n\
        print \'Hi, %s.\' % name\n\
        \'\'\'\n\
print \'Hello World!\'\n\
        ';

    }else if (value == 18){ //R
    	textarea.value = 'cat("Hello World!")\n';

    }else if (value == 19) {  // ruby
        textarea.value = '=begin\n\
        # Read input from stdin and provide input before running code\n\
        print "Please enter your name: "\n\
        name = gets.chomp\n\
        print "Hi #{name}\n"\n\
=end\n\
print \'Hello World!\'';

    } else if (value == 20){ //Rust
    	textarea.value='fn main()\n\n\
    	{\n\
    		println!("Hello World");\n\
    	}'

    }else if (Value == 21){ //Swift
    	textarea.value='println(&quot;Hello world&quot;)'


    }else if(value == 22){ //VB
    	textarea.value='Module Hello\n\
    	Sub Main()\n\
    		MsgBox("Hello, World!")\n\
    	End Sub\n\
    	End Module'
    }
}
