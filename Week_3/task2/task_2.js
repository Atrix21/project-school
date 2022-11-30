function func1(){
    let s="";
    let textbox=document.getElementById("t1");
    let t=textbox.value;
    let l=t.length;
    if (l>3){
        s="Out of range";
    }
    else
    {
        for(i=0;i<l;i++)
        {
            if((l-i==3) || (l-i==1))
            {
                if(t[i]=='1')
                    s=s+"one ";
                else if(t[i]=='2')
                    s=s+"two ";
                else if(t[i]=='3')
                    s=s+"three ";
                else if(t[i]=='4')
                    s=s+"four ";
                else if(t[i]=='5')
                    s=s+"five ";
                else if(t[i]=='6')
                    s=s+"six ";
                else if(t[i]=='7')
                    s=s+"seven ";
                else if(t[i]=='8')
                    s=s+"eight ";
                else if(t[i]=='9')
                    s=s+"nine ";
                else if(t[i]=='0')
                    continue;
                if(l-i==3)
                    s=s+"hundred ";
                if(l-i==1)
                    continue;
            }
            else if(l-i==2)
            {
                if(t[i]=='2')
                    s=s+"twenty ";
                else if(t[i]=='3')
                    s=s+"thirty ";
                else if(t[i]=='4')
                    s=s+"forty ";
                else if(t[i]=='5')
                    s=s+"fifty ";
                else if(t[i]=='6')
                    s=s+"sixty ";
                else if(t[i]=='7')
                    s=s+"seventy ";
                else if(t[i]=='8')
                    s=s+"eighty ";
                else if(t[i]=='9')
                    s=s+"ninety ";
                else if(t[i]=='0')
                    continue;
                else if(t[i]=='1')
                {
                    if(t[i+1]=='0')
                        s=s+"ten ";
                    else if(t[i+1]=='1')
                        s=s+"eleven ";
                    else if(t[i+1]=='2')
                        s=s+"twelve ";
                    else if(t[i+1]=='3')
                        s=s+"thirteen ";
                    else if(t[i+1]=='4')
                        s=s+"fourteen ";
                    else if(t[i+1]=='5')
                        s=s+"fifteen ";
                    else if(t[i+1]=='6')
                        s=s+"sixteen ";
                    else if(t[i+1]=='7')
                        s=s+"seventeen ";
                    else if(t[i+1]=='8')
                        s=s+"eighteen ";
                    else if(t[i+1]=='9')
                        s=+"nineteen ";
                    break;
                }
            }
        }
    }
    let textbox2=document.getElementById("t2");
    textbox2.value=s;
}