function check()
            {
                let flag1=0;
                let flag2=0;
                var user = document.getElementById('username');
                let p = document.getElementById("password").value;
                let sign=document.querySelector('.signal');
                const lowerCase = new RegExp('(?=.*[a-z])');
                const upperCase = new RegExp('(?=.*[A-Z])');
                const Num = new RegExp('(?=.*[0-9])');
                const spchar = new RegExp('(?=.*[!@#])');
                const echar = new RegExp('(?=.{8,})');
                if(user.value.endsWith("@gmail.com"))
                {
                    flag1=1;
                }
                console.log(p)
                if(echar.test(p) && lowerCase.test(p) && upperCase.test(p) && Num.test(p) && spchar.test(p))
                {
                    flag2=1;
                }
                if(flag2&&flag1)
                {
                    sign.style.backgroundColor='green';
                    alert("logged in");
                }
                else
                {
                    sign.style.backgroundColor='red';
                    alert("check your username and/or password");
                }
            }
            const subbutton = document.querySelector('.submit');
            subbutton.addEventListener('click',check);