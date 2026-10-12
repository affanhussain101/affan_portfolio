import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C#",
    ".NET Core",
    "Entity Framework Core",
    "Python",
    "FastAPI",
    "SQL Server",
    "PostgreSQL",
    "RESTful APIs",
    "Microservices",
    "Clean Architecture",
    "Domain-Driven Design",
    "Java"
];

const labelsSecond = [
    "RAG Architectures",
    "Agentic Workflows",
    "Model Context Protocol (MCP)",
    "LangChain",
    "LangGraph",
    "Vector Databases",
    "Local LLMs",
    "Claude",
    "Amazon Bedrock",
    "Google Gemini",
    "ChromaDB",
    "FAISS"
];

const labelsThird = [
    "AWS Certified Developer",
    "EC2 & S3",
    "Lambda & ECS",
    "Docker & Portainer",
    "CI/CD Pipelines",
    "SQL Server Tuning",
    "DynamoDB",
    "xUnit / NUnit",
    "Git & GitHub",
    "Jira & Agile"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend & Microservices Architecture</h3>
                    <p>Over 3+ years architecting scalable .NET Core & Python microservices, high-performance transactional backends, multi-tenant database isolations, and resilient asynchronous processing pipelines.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI, RAG & Agentic Workflows</h3>
                    <p>Engineering production-oriented GenAI solutions including Agentic AI workflows with MCP, RAG-based Text-to-SQL systems with local LLMs, and intelligent automation pipelines that safeguard enterprise data privacy.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud, DevOps & Optimization</h3>
                    <p>AWS Certified Developer Associate building secure, cloud-native enterprise solutions. Skilled in container orchestration with Docker/Portainer, CI/CD, database indexing, and query optimization achieving ~35% performance gains.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;