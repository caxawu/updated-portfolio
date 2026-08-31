# Portfolio

3D interactive portfolio site.

Visitors can click into the 3D room and navigate around to explore projects, or go to the classic portfolio site.

Workflow:
- Maya
    - Models objects, texture, and light
        - Add invisible hit boxes to objects
    - Bake lighting and export to texture map (Render selection to texture)
        - Compress texture map for performance
    - Duplicate room and re-texture objects with baked lighting
    - Combine objects for more efficient rendering (combined tex file)
    - Export entire room as fbx
- Convert
    - Convert fbx to glb
- React
    - Pull in glb file
    - Light room with GI
    - Add interactivity on top through iFrame or mesh handler
- Publishing
    - Deploying to xinaicathywu.me through Netlify

'npm run dev' to start dev environment.
