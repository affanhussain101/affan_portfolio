import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career, Certifications & Milestones</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Engineer (SDE1)</h3>
            <h4 className="vertical-timeline-element-subtitle">Byteridge — Bengaluru, Karnataka</h4>
            <p>
              <b>• Scalable Backend & Microservices Architecture:</b> Designed and maintained scalable .NET Core microservices
              using clean architecture and domain-driven design principles, building reliable APIs and loosely coupled services
              capable of supporting complex enterprise workflows and evolving business requirements.
            </p>
            <p>
              <b>• Multi-Tenant Architecture:</b> Designed and implemented a multi-tenant architecture from scratch for a
              microservices-based platform using database/schema isolation in SQL Server. Established tenant-aware data access
              and service patterns to ensure secure data segregation while simplifying tenant onboarding and reducing operational
              effort.
            </p>
            <p>
              <b>• AI/LLM & RAG Engineering:</b> Engineered a production-oriented RAG-based Text-to-SQL solution using Local
              LLMs, enabling users to interact with relational database schemas through natural-language queries. Designed the
              solution to retrieve relevant schema context and generate SQL through secure RESTful APIs while keeping sensitive
              data within the local environment.
            </p>
            <p>
              <b> • Agentic AI & Engineering Automation:</b> Designed Agentic AI workflows using MCP and automated development
              tools to streamline software engineering activities such as retrieving requirements, analyzing code, assisting with
              implementation, testing, and development workflow automation. Explored AI-driven approaches to improve developer
              productivity while maintaining enterprise security and code-quality standards.
            </p>
            <p> <b>• High-Volume & Asynchronous Data Processing:</b> Engineered scalable backend processing pipelines using C#
              background workers, queue-based architecture, batching, bulk operations, and optimized Entity Framework Core/SQL
              Server queries to handle high-volume transactional workloads asynchronously. Reduced processing overhead, improved
              application responsiveness and throughput, and achieved approximately 35% improvement in database and API
              performance.</p>
            <p>
              <b>• Database Architecture & Optimization:</b> Architected and optimized relational data models using SQL Server and
              Entity Framework Core, applying indexing, query optimization, bulk operations, batching, and efficient data-access
              patterns to support enterprise-scale workloads and maintain application performance as data volumes increased.
            </p>

            <p>
              <b>• Software Engineering & Technical Excellence:</b> Championed SOLID principles, clean code, reusable components,
              and maintainable architecture across backend services. Contributed to code reviews, troubleshooting, performance
              improvements, and technical guidance to maintain high engineering standards across the development lifecycle.
            </p>
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Valid through 09/2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faAward} />}
          >
            <h3 className="vertical-timeline-element-title">AWS Certified Developer – Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Amazon Web Services (AWS)</h4>
            <p>
              Credential validating expertise in core AWS services, secure cloud-native architecture, deployment automation, serverless computing (Lambda, ECS, S3, RDS, DynamoDB), and CI/CD pipelines.
            </p>
          </VerticalTimelineElement> */}

          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3 className="vertical-timeline-element-title">Key Honors & Problem Solving</h3>
            <h4 className="vertical-timeline-element-subtitle">Byteridge & Competitive Programming</h4>
            <p>
              • Awarded Performance Champion (Bytemate of the Year) at Byteridge for exceptional overall impact.<br />
              • 3-time Consistent Performer & Value Champion awardee.<br />
              • Solved 500+ problems on LeetCode; secured 1st place in the Stiegen Lane Competition.
            </p>
          </VerticalTimelineElement> */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2019 - June 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering — Information Science & Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Acharya Institute of Technology — CGPA: 8.5</h4>
            <p>
              Graduated with an 8.5 CGPA. Built strong foundations in Data Structures, Algorithms, Distributed Computing, Database Systems, Object-Oriented Design, and Software Engineering.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div >
  );
}

export default Timeline;