import { EventEmitter } from '@angular/core';
import { Link } from './link';
import { Node } from './node';
import * as d3 from 'd3';
import { forceX } from 'd3';

const FORCES = {
    LINKS: 20 / 50,
    COLLISION: 10,
    CHARGE: -1000
};

export class ForceDirectedGraph {
    public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
    public simulation: d3.Simulation<any, any>;

    adjancy: any;
    public nodes: Node[] = [];
    public links: Link[] = [];

    constructor(nodes, links, options: { width, height }) {
        this.nodes = nodes;
        this.links = links;
        this.initSimulation(options);
    }

    initSimulation(options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }
        /** Creating the simulation */
        if (!this.simulation) {

            // Creating the force simulation and defining the charges
            this.simulation = d3.forceSimulation()
                .force('charge', d3.forceManyBody().strength(FORCES.CHARGE))
                .force('forceX', d3.forceX(options.width / 2).strength(0.1))
                .force('forceY', d3.forceY(options.height / 2).strength(0.1))
                .force('centers', d3.forceCenter(options.width / 2, options.height / 2));

            this.simulation.nodes(this.nodes);
            this.simulation.force('links',
            d3.forceLink(this.links)
                .strength(FORCES.LINKS)
            );
        }
        this.simulation.restart();
    }
}
