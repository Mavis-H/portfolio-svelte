import{A as o}from"./UIcon.5112b6ac.js";const i=`# Leetcode #11: Container with Most Water

---

![Alt Text](https://i.ibb.co/4RQLn0C/blog0-0.png)

[Problem #11](https://leetcode.com/problems/container-with-most-water/description/) gives an integer array \`height\` of length \`n\`, and each element represents a height. We are trying to find a container that can trap the most water.

<br/>

To calculate the container's water volume: **\`V = h * w = min(height[left], height[right]) * (right - left)\`**, where \`left\` and \`right\` are the indexes of the container's borders.

<br/>

We start with the largest \`w\` we can have which is when \`left\` is \`0\` and \`right\` is \`n-1\`. To find the largest container, we could reduce the \`w\` by \`1\` and search for a better \`h\`. The problem is how to reduce the \`w\`. Which side of the border should we change?

<br/>

The answer is very intuitive. We abandon the lower border to search for a better \`h\`.

<br/>

## Code

\`\`\`js
volume = 0
left, right = 0, len(height)-1

while left < right:
    curr_volume = min(height[left], height[right]) * (right - left)
    volume = max(volume, curr_volume)
    if height[left] < height[right]:
        left +=1
    else:
        right -=1

return volume
\`\`\`
`,e=t=>t,r=[e({slug:"py",name:"Python"}),e({slug:"algo",name:"Algorithm"}),e({slug:"lc",name:"Leetcode"}),e({slug:"dp",name:"Dynamic Programming"}),e({slug:"2pointers",name:"Two Pointers"}),e({slug:"ar",name:"Array"})],a=(...t)=>r.filter(n=>t.includes(n.slug)),s=[{slug:"container-with-most-water-intuitive-solution",color:"lightblue",description:i,shortDescription:"An intuitive solution to find the container with most water in a 1D array using <b>two pointers</b>.",id:0,links:[{to:"https://leetcode.com/problems/container-with-most-water/",label:"Leetcode"}],logo:o.Blog_0,name:"Container with Most Water Intuitive Solution",date:new Date,topics:a("lc","2pointers","ar","algo")}],l="Blogs";export{s as a,r as i,l as t};
