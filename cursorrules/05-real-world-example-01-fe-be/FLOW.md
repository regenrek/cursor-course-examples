```mermaid
graph TD
    %% Main Components
    A["Root Project"]
    B["Frontend"]
    C["Backend"]
    D[".cursor"]

    %% Frontend Components
    E["frontend/src"]
    F["frontend/pages"]
    G["frontend/styles"]

    %% Backend Components
    H["backend/src"]
    I["backend/index.ts"]

    %% Cursor Rules Components
    J["rules"]
    K["agent.mdc"]
    L["frontend-guidelines.mdc"]
    M["backend-guidelines.mdc"]
    N["database-guidelines.mdc"]

    %% Relationships
    A --> B
    A --> C
    A --> D
    
    %% Frontend Structure
    B --> E
    E --> F
    E --> G

    %% Backend Structure
    C --> H
    H --> I

    %% Cursor Rules Structure
    D --> J
    J --> K
    J --> L
    J --> M
    J --> N

    %% Styling
    style A fill:#770077,stroke:#000000,stroke-width:2px;color: #ffffff 
    style B fill:#0000ff,stroke:#000000,stroke-width:2px;color: #ffffff
    style C fill:#0000ff,stroke:#000000,stroke-width:2px;color: #ffffff
    style D fill:#0000ff,stroke:#000000,stroke-width:2px;color: #ffffff
    style J stroke:#fff,stroke-width:2px;color: #ffffff
    style K stroke:#000000,stroke:#fff,stroke-width:2px;color: #ffffff
    style L stroke:#000000,stroke:fff,stroke-width:2px;color: #ffffff
    style M stroke:#000000,stroke:#fff,stroke-width:2px;color: #ffffff
    style N stroke:#000000,stroke:#fff,stroke-width:2px;color: #ffffff
