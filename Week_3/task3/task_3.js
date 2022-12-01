let tableArr = [["Group Id", "Project Name"],["G6", "Develop a Software for Categorization of cases"],["G8", "Develop a Software for Categorization of cases"],["G41", "Crowd Sourcing model for preparing large questionbanks"],["G47", "Crowd Sourcing model for preparing large questionbanks"],["G30", "Online project platform for sharing"],["G26", "Online project platform for sharing"],["G33", "Centralized grievance system portal"],["G38", "Centralized grievance system portal"]];
            let t1=document.createElement("table");
            let t2=document.createElement("tbody");
            for(let i=0;i<tableArr.length;i++)
            {
                let t3=document.createElement("tr");
                for(let j=0;j<2;j++)
                {
                    const cell = document.createElement("td");
                    cell.innerText=tableArr[i][j];
                    cell.style.textAlign="center";
                    t3.appendChild(cell);
                }
                t2.appendChild(t3);
            }
            t1.appendChild(t2);
            document.body.appendChild(t1);
            t1.style.borderCollapse="collapse";
            t1.setAttribute("border","1");